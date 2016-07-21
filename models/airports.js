var mongoose = require("mongoose");

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
var name = 'airports';

var schema = new mongoose.Schema({
        id: mongoose.Schema.ObjectId,
        airportCode: {type: String, required: true, index: {unique: true}},
        airportName: {type: String},
        cityCode: {type: String},
        cityName: {type: String, required: true},
        countryCode: {type: String},
        countryName: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
        stateCode: {type: String},
        timeZone: {type: String}
    });

module.exports = mongoose.model(name, schema);