 var mongoose = require("mongoose");

/**
* rebuild the database
*/
app.get('/setup/airlinesdb', function(req, res) {

    var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
    var name = 'airlines';
    var schema = new mongoose.Schema({
	   id: mongoose.Schema.ObjectId,
	   code: {type: String, required: true, index: {unique: true}},
	   name: {type: String, required: true}
    });
    var airlines = mongoose.model(name, schema); 
    var dataBag = [{
			"code": "SU",
			"name": "Aeroflot"
		},
		{
			"code": "MU",
			"name": "China Eastern"
		},
		{
			"code": "EK",
			"name": "Emirates"
		},
		{
			"code": "KE",
			"name": "Korean Airlines"
		},
        {
			"code": "QF",
			"name": "Qantas"
		},
        {
			"code": "SQ",
			"name": "Singapore"
		}];
        airlines.collection.insert(dataBag, onInsert);

        function onInsert(err, docs) {
            if (err) {
                console.log('error');
            } else {
                console.info('%d data were successfully stored.', docs.length);
                console.log('success');
            }
        }   
});

app.get('/setup/airportsdb', function(req, res) {

    var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
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
    var airports = mongoose.model(name, schema); 
    var dataBag = [{
			"airportCode": "ABX",
            "airportName": "Albury International Arpt",
            "cityCode": "ABX",
            "cityName": "Albury",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "AYQ",
            "airportName": "Ayers Rock International Arpt",
            "cityCode": "AYQ",
            "cityName": "Ayers Rock",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "BNE",
            "airportName": "Brisbane International Arpt",
            "cityCode": "BNE",
            "cityName": "Brisbane",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "BME",
            "airportName": "Broome International Arpt",
            "cityCode": "BME",
            "cityName": "Broome",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "BDB",
            "airportName": "Bundabery International Arpt",
            "cityCode": "BDB",
            "cityName": "Bundabery",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "CBR",
            "airportName": "Canberra International Arpt",
            "cityCode": "CBR",
            "cityName": "Canberra",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "CCK",
            "airportName": "Cocos Islands International Arpt",
            "cityCode": "CCK",
            "cityName": "Cocos Islands",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "CFS",
            "airportName": "Coffs Harbour International Arpt",
            "cityCode": "CFS",
            "cityName": "Coffs Harbour",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "DRW",
            "airportName": "Darwin International Arpt",
            "cityCode": "DRW",
            "cityName": "Darwin",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "EMD",
            "airportName": "Emerald International Arpt",
            "cityCode": "EMD",
            "cityName": "Emerald",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "GET",
            "airportName": "Gealdton International Arpt",
            "cityCode": "GET",
            "cityName": "Gealdton",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "GLT",
            "airportName": "Gladstone International Arpt",
            "cityCode": "GLT",
            "cityName": "Gladstone",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "OOL",
            "airportName": "Gold Coast International Arpt",
            "cityCode": "OOL",
            "cityName": "Gold Coast",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "MKY",
            "airportName": "Mackay International Arpt",
            "cityCode": "MKY",
            "cityName": "Mackay",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "MEL",
            "airportName": "Melbourne International Arpt",
            "cityCode": "MEL",
            "cityName": "Melbourne",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "PER",
            "airportName": "Perth International Arpt",
            "cityCode": "PER",
            "cityName": "Perth",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		},
        {
			"airportCode": "SYD",
            "airportName": "Sydney International Arpt",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": 28.102753,
            "longitude": -80.645258,
            "stateCode": "VIC",
            "timeZone": "Australia/Sydney"
		}];
        airports.collection.insert(dataBag, onInsert);

        function onInsert(err, docs) {
            if (err) {
                console.log('error');
            } else {
                console.info('%d data were successfully stored.', docs.length);
                console.log('success');
            }
        }   
});


