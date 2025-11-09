package com.voma.auth.controller;

import com.voma.auth.model.User;
import com.voma.auth.repository.UserRepository;
import com.voma.auth.service.AuthService; // ✅ ADD THIS LINE
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // allow frontend requests
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthService authService; // ✅ ADD THIS FIELD

    // ---------- SIGNUP ROUTE ----------
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already registered");
        }
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already taken");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setVerified(false);

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully! Please verify your email.");
    }

    // ---------- LOGIN ROUTE ----------
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        String token = authService.login(loginRequest.getEmail(), loginRequest.getPassword());

        if (token == null) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        if (token.equals("NOT_VERIFIED")) {
            return ResponseEntity.status(403).body("Please verify your email first");
        }

        return ResponseEntity.ok(token);
    }
    // ---------- PROTECTED TEST ROUTE ----------
@GetMapping("/me")
public ResponseEntity<?> getMyAccountInfo(@RequestHeader("Authorization") String authHeader) {
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
        return ResponseEntity.status(401).body("Missing or invalid token");
    }

    String token = authHeader.substring(7);
    if (!authService.getJwtService().validateToken(token)) {
        return ResponseEntity.status(401).body("Invalid or expired token");
    }

    String email = authService.getJwtService().extractEmail(token);
    return ResponseEntity.ok("Your email: " + email);
}

}
