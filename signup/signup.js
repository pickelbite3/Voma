// backend interactions

function validateEmail(email) {
  // this is a pit of worms i don't want to dig into, probably mostly server side.
  return 0;
}

function checkEmail(email) {
  // access email database to check if account already exists, will return true if email exists in database
  return 0;
}

function checkUsername(username) {
  // check for unique username, if not show message indicating wether username is available
  return 0;
}

function setAccount(email, username, password) {
  // send password, email, and username to database encrypted to add account to login-able list or whatever
  return 0; 
}

function sendConfEmail(email) {
  // send a confirmation email, somehow expect a return giving the code, or however you do that securely
  return 0;
}

// frontend functionality
// Code for handling multi-step signup process, moving up and down

let currentIndex = 0;
const steps = document.querySelectorAll('.step');
const header = document.getElementById('header');

function nextStep() {
  if (currentIndex < steps.length - 1) {
    currentIndex++;
    steps[currentIndex].scrollIntoView({ behavior: 'smooth' });
  }
}

function prevStep() {
  if (currentIndex > 0) {
    currentIndex--;
    steps[currentIndex].scrollIntoView({ behavior: 'smooth' });
  }
}

// disable wheel/touch scroll
const container = document.querySelector('.container');
container.addEventListener('wheel', e => e.preventDefault(), { passive: false });
container.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

// Code for password confirmation check

const pwdInput = document.getElementById('pwd-input'); // give your first password an id
const pwdConfInput = document.getElementById('pwd-conf-input');
const matchIndicator = document.getElementById('pwd-match-indicator');


function checkPasswordMatch() {
  if (pwdConfInput.value === '') {
    matchIndicator.textContent = '';
  } else if (pwdConfInput.value === pwdInput.value) {
    matchIndicator.style.backgroundColor = 'green';
    matchIndicator.style.boxShadow = '0 0 5px green';
  } else {
    matchIndicator.style.backgroundColor = 'red';
    matchIndicator.style.boxShadow = '0 0 5px red';
  }
}

pwdConfInput.addEventListener('input', checkPasswordMatch);


// Code for displaying email in confirmation step

const emailInput = document.getElementById('email-input');
const emailConfirmationSpan = document.getElementById('email-confirmation');

emailInput.addEventListener('input', () => {
  emailConfirmationSpan.textContent = emailInput.value;
});


//! TODO: Add actual email sending and verification logic here, make sure it is a valid email before allowing procession to next step.
//! TODO: Add username checker to ensure username is unique before allowing procession to next step.
