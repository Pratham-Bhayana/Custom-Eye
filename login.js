const switchToRegisterBtn = document.querySelector('.switch-to-register'); 
const switchToLoginBtn = document.querySelector('.switch-to-login'); 
const loginContainer = document.querySelector('.login-container');

// Event listener to flip to the register form
switchToRegisterBtn.addEventListener('click', () => {
    loginContainer.classList.add('flipped');
});

// Event listener to flip back to the login form
switchToLoginBtn.addEventListener('click', () => {
    loginContainer.classList.remove('flipped');
});

    