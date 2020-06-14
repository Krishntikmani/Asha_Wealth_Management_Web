var mongoose = require('mongoose');

var querySchema = new mongoose.Schema({
	name: String,
	email: String,
	mobile_no : Number,
	whatsapp : Number,
	qry: String
});

module.exports = mongoose.model('Query',querySchema);