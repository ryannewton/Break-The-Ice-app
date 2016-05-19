var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	alias: {
		type: String,
		required: true
	},
	hometown: {
		type: String,
		required: true
	},
	interests: {
		type: Array,
		required: true
	},
	pic_url: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('users', UserSchema);