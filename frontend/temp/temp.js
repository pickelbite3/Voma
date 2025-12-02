const username_input = document.getElementById('username');
const email_input = document.getElementById('email');
const password_input = document.getElementById('password');
const password_confirm_input = document.getElementById('confirm-password');
const signup_button = document.getElementById('signup-btn');

function checkPasswordMatch() {
    var password = password_input.value;
    var password_conf = password_confirm_input.value;

    if (password === password_conf) {
        password_confirm_input.style.backgroundColor = 'rgba(0, 100, 0, 0.43)';
    } else {
        password_confirm_input.style.backgroundColor = 'rgba(100, 0, 0, 0.44)';
    }
}

password_input.addEventListener('keyup', checkPasswordMatch);
password_confirm_input.addEventListener('keyup', checkPasswordMatch);

document.addEventListener('DOMContentLoaded', function () {
    checkPasswordMatch();
});

