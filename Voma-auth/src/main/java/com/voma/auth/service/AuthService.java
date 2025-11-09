package com.voma.auth.service;

import com.voma.auth.model.User;
import com.voma.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String login(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isEmpty()) {
            return null;
        }

        User user = userOpt.get();

        if (!passwordEncoder.matches(password, user.getPassword())) {
            return null;
        }

        if (!user.isVerified()) {
            return "NOT_VERIFIED";
        }

        return jwtService.generateToken(email);
    }

    // ✅ Add this so AuthController can use jwtService
    public JwtService getJwtService() {
        return jwtService;
    }
}
