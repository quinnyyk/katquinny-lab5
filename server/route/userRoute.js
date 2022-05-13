console.log("[userRoutes.js] initialized")
var userController = require("../controller/userController");

// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();

// all users routes
router.route('/')
.get( ( req, res ) => {
userController.getAllUsers( req, res );
})

router.route('/')
.delete( ( req, res ) => {
userController.deleteUser( req, res );
})



.post( ( req, res ) => {
userController.saveUser( req, res );
}
);

// user by array index route
router.route('/:index')
.post( ( req, res ) => {
userController.getUser( req, res );
}
);


module.exports = router;
