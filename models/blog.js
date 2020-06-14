var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	title: String,
	message: String,
});

module.exports = mongoose.model('Blog',blogSchema);