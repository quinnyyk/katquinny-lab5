
console.log("Module [userController.js] loaded"); 
var user = require('../model/user')

let users = [];

let brian = user.createUser("Brian", "Gormanly", "bg@email.com", "bgormanly", "12345");
users.push(brian);
let katherine = user.createUser("Katherine", "Quinn", "kq@gmail.com", "kquinn", "hello2");
users.push(katherine)
let Jack = user.createUser("Jack", "Callahan", "JC2email.com", "jcallahan", "howdy2");
users.push(Jack)
let Julia = user.createUser("Julia", "Hass", "jh@email.com", "jhass", "singing3");
users.push(Julia);

exports.getAllUsers = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( users );
}

// retrieve the user in the :index parameter of the request and return as json
exports.getUser = ( req, res ) => {
res.setHeader( 'Content-Type', 'application/json' );
res.send( users[ req.params.index ] );
}

// save a user
exports.saveUser = ( req, res ) => {
    let newUser = user.createUser( req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password );
    users.push( newUser );
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( users );
    }


        
