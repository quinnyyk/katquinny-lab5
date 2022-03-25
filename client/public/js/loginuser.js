//grabbing html ids
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
// when use clicks login, their username and password are being store in the username and password variables
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
// checking to see if the username and password are the ones i setup for the demo
    if (username === "user" && password === "password") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        // if wwrong it shows an error message is true
        loginErrorMsg.style.opacity = 1;
    }
})