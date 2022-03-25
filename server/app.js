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

app.use(express.static('client/public'));

app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));