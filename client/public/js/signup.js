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

// save a user
exports.saveUser = ( req, res ) => {
    let newUser = user.createUser( req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password );
    users.push( newUser );
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( users );
    }

let base64 = require('base-64');

let url = 'http://localhost:1337/signup.html';

let headers = new Headers();

headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));
    
fetch(url, {method:'GET',
        headers: headers,
        credentials: 'user'
           })
.then(response => response.json())
.then(json => console.log(json))
.done();