// create variavles for
const signup = document.querySelector(".signup");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const pwd_format = document.querySelector(".pwd-format");
// The password should contain around 8-15 alhpanumeric character
// variable to be used in function
const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

password.addEventListener('focusin', () => {
    pwd_format.style.display = 'block';

    // checking the password the user entered to see if it fits the AlphaNumeric guide
    password.addEventListener('keyup', () => {
        //If password fits, box border turns green
        if (passwordPattern.test(password.value)) {
            password.style.borderColor = 'green'
            pwd_format.style.color = 'green'
        } else {
            // if password doesnt fit, box border turns red
            password.style.borderColor = 'red'
            pwd_format.style.color = 'red'
        }
    })
})
//checking for password
password.addEventListener('focusout', () => {
    pwd_format.style.display = 'none';
})
//checking if password matches
confirmPassword.addEventListener('focusin', () => {
    pwd_format.style.display = 'block';
    confirmPassword.addEventListener('keyup', () => {
        if (passwordPattern.test(confirmPassword.value) && password.value === confirmPassword.value) {
            // if it matches, border turns gree
            confirmPassword.style.borderColor = 'green'
            pwd_format.style.color = 'green'
        } else {
            // if it doesnt match broder turns red
            confirmPassword.style.borderColor = 'red'
            pwd_format.style.color = 'red'
        }
    })
})

confirmPassword.addEventListener('focusout', () => {
    pwd_format.style.display = 'none';
})
// if box is checked, turn signup from disabled to enabled. Signup will enable even if fields are not filled out
termCond.addEventListener('change', () => {
    if (termCond.checked === true) {
        signup.disabled = false;
    } else if (termCond.checked === false) {
        signup.disabled = true;
    }
})