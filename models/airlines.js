var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
var name = 'airlines';

var schema = new mongoose.Schema({
	id: mongoose.Schema.ObjectId,
	code: {type: String, required: true, index: {unique: true}},
	name: {type: String, required: true}
});

module.exports = mongoose.model(name, schema);
