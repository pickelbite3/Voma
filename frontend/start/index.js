const login_card_wrapper = document.querySelector('.login');
const signup_card_wrapper = document.querySelector('.signup');

const login_card = document.getElementById('login-card');
const signup_card = document.getElementById('signup-card');

const back_btn = document.getElementById('back-btn');

function showLogin() {
    login_card_wrapper.style.zIndex = '2';
    signup_card_wrapper.style.zIndex = '1';
    login_card.classList.remove('inactive');
    login_card.classList.add('active');
    signup_card.classList.remove('active');
    signup_card.classList.add('inactive');
}

function showSignup() {
    signup_card_wrapper.style.zIndex = '2';
    login_card_wrapper.style.zIndex = '1';
    signup_card.classList.remove('inactive');
    signup_card.classList.add('active');
    login_card.classList.remove('active');
    login_card.classList.add('inactive');
}

function backBtnCheck() {
    if (signup_card.classList.contains('active')) {
        back_btn.style.opacity = '100%';
    } else if( login_card.classList.contains('active')) {
        back_btn.style.opacity = '100%';
    } else {
        back_btn.style.opacity = '0%';
    }
}

function goBack() {
    login_card.classList.remove('active');
    signup_card.classList.remove('active');
    signup_card.classList.remove('inactive');
    login_card.classList.remove('inactive');
    backBtnCheck();
}

back_btn.addEventListener('click', goBack);

login_card_wrapper.addEventListener('click', () => {
    showLogin();
    backBtnCheck();
});
signup_card_wrapper.addEventListener('click', () => {
    showSignup();
    backBtnCheck();
});