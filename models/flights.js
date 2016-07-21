var mongoose = require("mongoose");

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
var name = 'flights';

var schema = new mongoose.Schema({
	   id: mongoose.Schema.ObjectId,
	   airline: {type: Array},
	   flightNum: {type: Number},
       start: {type: Array},
       finish: {type: Array},
       plane: {type: Array},
       distance: {type: Number},
       durationMin: {type: Number}, 
       price: {type: Number}  
    });

module.exports = mongoose.model(name, schema);