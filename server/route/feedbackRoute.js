console.log("[feedbackRoute.js] initialized")
var feedbackController = require("../controller/feedbackController");

// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();

// all users routes
router.route('/')
.get( ( req, res ) => {
feedbackController.searchAllFeedback( req, res );
})
.post( ( req, res ) => {
feedbackController.saveFeedback( req, res );
}
)
.put( (req, res) => {
feedbackController.updateFeedback( req, res );
})

// user by array index route
router.route('/:index')
.get( ( req, res ) => {
feedbackController.getFeedback( req, res );
}
);

module.exports = router;