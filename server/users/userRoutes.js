var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Event = mongoose.model('events');
var User = mongoose.model('users');

router.post('/register', function(req, res, next) {
	//createUser
	if (!req.body.email || !req.body.password || !req.body.first_name ||
		!req.body.last_name || !req.body.alias || !req.body.hometown) {
		return res.status(400).json({})
	}

	var user = new User;
	user.save(function(err) {
		if (err) {
			console.log("Error saving user: " + err);
			return next(err);
		} else {
			res.send("SUCCESS!");
		}
	});
});

router.post('/login', function(req, res) {
	//checkAuth
	if(!req.body.username || !req.body.password) {
		return res.status(400).json({message: "Please fill out all fields"});
	}
});


router.param('user', function(req, res, next, id) {
	var query = Post.findById(id);

	query.exec(function(err, user) {
		if (err) { return next(err); }
		if (!user) { return next(new Error("can't find user")); }

		req.user = user;
		return next();
	})
});

router.get('/users/:user', function(req, res, next) {
	//getUser
});

router.delete('/users/:user', function(req, res, next) {
	//deleteUser
})

router.post('/users/:user/events', function(req, res, next) {
	//joinEvent
})

module.exports = router;