//grabbing html ids
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function authenticateUser(req, res, done) {

    let username = req.body.username,
        password = req.body.password,
        email    = req.body.email;
    let conditions = !!username ? {username: username} : {email: email};
  
    user.findOne(conditions, (err, user) => {
      if (err)   return done(err);
      if (!user) return done(new Error('Incorrect username or email'));
  
      return user.comparePassword(password, user.password)
      .then(match => {
        if (match) done(window.open("http://localhost:1337/signup.html"));

        else       return done(new Error('Incorrect password'));
      })
      .catch(error => {
        if (error) return done(new Error(`Unable to validated password. - ${error}`));
      });
    });
  
  }
