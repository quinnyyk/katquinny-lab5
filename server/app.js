const express = require('express');
const app = express();
// initializing index page
app.get('/', function (req, res) {
res.sendFile('index.html', {root: './client/views' })
})
app.get('/index.html', function(req,res) {
	res.sendFile('index.html', {root: './client/views'})
})

// intializing and getting login page
app.get('/login.html', function (req, res) {
	res.sendFile('login.html', { root: './client/views' })
})

// initializing and getting singup page
app.get('/signup.html', function (req, res) {
	res.sendFile('signup.html', { root: './client/views' })
})

// initializing and getting userpost page
app.get('/userPost.html', function (req, res) {
	res.sendFile('userPost.html', { root: './client/views' })
})

var users = require('./controller/userController');
var userRoutes = require('./route/userRoute');
var userModel = require('./service/userService');

var feedback = require('./controller/feedbackController');
var feedbackRoutes = require('./route/feedbackRoute');
var feedbackModel = require('./service/feedbackService');

app.route('/api/users')
	.post(users.saveUser)

app.route('/api/user')
	.get(users.getAllUsers)
	.delete(users.deleteUser)

app.route('/api/feedback')
	.get(feedback.searchAllFeedback)
	.get(feedback.getFeedback)
	.post(feedback.saveFeedback)
	



app.use(express.static('client/public'));

app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));