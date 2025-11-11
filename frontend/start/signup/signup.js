// backend interactions


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
