console.log("Module [feedbackController.js] loaded"); 
var feedback = require("../model/feedback");

let feedbacks = [];


let game1Review = feedback.createFeedback("2/5", "Animations are rough, could use some more time spent on that. I keep glitching through the 3rd leve.");
feedbacks.push(game1Review);
let game2Review = feedback.createFeedback("5/5", "SUPER FUN! Obviouslyl a lot of time spent on this! Awesome job");
feedbacks.push(game2Review);
let game3Review = feedback.createFeedback("4/5", "I like the progress! Very good so far, cant wait to see where it goes. Maybe work on the collisions more because I am phasing through a lot of objects");
feedbacks.push(game3Review);

exports.searchAllFeedback = (req, res) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send(feedbacks);
}
exports.saveFeedback = ( req, res ) => {
    let newFeedback = feedback.createFeedback(req.body.rating, req.body.review)
    feedbacks.push(newFeedback);
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( feedbacks );
    }

exports.getFeedback = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( feedbacks[ req.params.feedbackindex ] );
    }   
