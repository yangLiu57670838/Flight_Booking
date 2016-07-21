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

app.get('/setup/flightdb', function(req, res) {

    var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
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
    var flights = mongoose.model(name, schema); 
    var dataBag = [{
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 389,
    "start": {
      "dateTime": "2016-07-20T10:01:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-07-21T16:02:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 400
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 833,
    "start": {
      "dateTime": "2016-07-21T06:51:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T12:52:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 387
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 858,
    "start": {
      "dateTime": "2016-07-22T04:47:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast Airport",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:48:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 289
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 471,
    "start": {
      "dateTime": "2016-07-23T17:19:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:20:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 500
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 406,
    "start": {
      "dateTime": "2016-07-24T08:57:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:58:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 400
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 597,
    "start": {
      "dateTime": "2016-07-20T00:36:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T06:37:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 521
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 405,
    "start": {
      "dateTime": "2016-07-21T17:17:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:18:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 333
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 347,
    "start": {
      "dateTime": "2016-07-22T07:54:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T13:55:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 344
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-23T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 256
  },
    {
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-24T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 453
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 389,
    "start": {
      "dateTime": "2016-07-20T10:01:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-07-21T16:02:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 640
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 833,
    "start": {
      "dateTime": "2016-07-21T06:51:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T12:52:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 232
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 858,
    "start": {
      "dateTime": "2016-07-22T04:47:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast Airport",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:48:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 219
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 471,
    "start": {
      "dateTime": "2016-07-23T17:19:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:20:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 211
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 406,
    "start": {
      "dateTime": "2016-07-24T08:57:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:58:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 421
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 597,
    "start": {
      "dateTime": "2016-07-20T00:36:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T06:37:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 212
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 405,
    "start": {
      "dateTime": "2016-07-21T17:17:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:18:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 323
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 347,
    "start": {
      "dateTime": "2016-07-22T07:54:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T13:55:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 436
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-23T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 257
  },
    {
    "airline": {
      "code": "SU",
      "name": "Aeroflot"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-24T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 259
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 389,
    "start": {
      "dateTime": "2016-07-20T10:01:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-07-21T16:02:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 641
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 833,
    "start": {
      "dateTime": "2016-07-21T06:51:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T12:52:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 212
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 858,
    "start": {
      "dateTime": "2016-07-22T04:47:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast Airport",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:48:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 267
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 471,
    "start": {
      "dateTime": "2016-07-23T17:19:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:20:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 265
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 406,
    "start": {
      "dateTime": "2016-07-24T08:57:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:58:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 476
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 597,
    "start": {
      "dateTime": "2016-07-20T00:36:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T06:37:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 218
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 405,
    "start": {
      "dateTime": "2016-07-21T17:17:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:18:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 393
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 347,
    "start": {
      "dateTime": "2016-07-22T07:54:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T13:55:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 439
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-23T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 546
  },
    {
    "airline": {
      "code": "MU",
      "name": "China Eastern"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-24T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 251
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 389,
    "start": {
      "dateTime": "2016-07-20T10:01:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-07-21T16:02:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 621
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 833,
    "start": {
      "dateTime": "2016-07-21T06:51:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T12:52:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 2121
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 858,
    "start": {
      "dateTime": "2016-07-22T04:47:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast Airport",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:48:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 222
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 471,
    "start": {
      "dateTime": "2016-07-23T17:19:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:20:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 546
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 406,
    "start": {
      "dateTime": "2016-07-24T08:57:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:58:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 487
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 597,
    "start": {
      "dateTime": "2016-07-20T00:36:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T06:37:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 281
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 405,
    "start": {
      "dateTime": "2016-07-21T17:17:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:18:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 339
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 347,
    "start": {
      "dateTime": "2016-07-22T07:54:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T13:55:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 467
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-23T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 543
  },
    {
    "airline": {
      "code": "EK",
      "name": "Emirates"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-24T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 255
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 389,
    "start": {
      "dateTime": "2016-07-20T10:01:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-07-21T16:02:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 621
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 833,
    "start": {
      "dateTime": "2016-07-21T06:51:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T12:52:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 2121
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 858,
    "start": {
      "dateTime": "2016-07-22T04:47:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast Airport",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:48:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 222
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 471,
    "start": {
      "dateTime": "2016-07-23T17:19:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:20:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 546
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 406,
    "start": {
      "dateTime": "2016-07-24T08:57:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:58:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 487
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 597,
    "start": {
      "dateTime": "2016-07-20T00:36:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T06:37:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 2212
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 405,
    "start": {
      "dateTime": "2016-07-21T17:17:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:18:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 321
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 347,
    "start": {
      "dateTime": "2016-07-22T07:54:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T13:55:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 411
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-23T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 555
  },
    {
    "airline": {
      "code": "KE",
      "name": "Korean Airlines"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-24T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 585
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 389,
    "start": {
      "dateTime": "2016-07-20T10:01:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-07-21T16:02:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 666
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 833,
    "start": {
      "dateTime": "2016-07-21T06:51:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T12:52:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 123
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 858,
    "start": {
      "dateTime": "2016-07-22T04:47:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast Airport",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:48:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 290
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 471,
    "start": {
      "dateTime": "2016-07-23T17:19:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast Airport",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:20:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 532
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 406,
    "start": {
      "dateTime": "2016-07-24T08:57:00+10:00",
      "airportCode": "OOL",
      "airportName": "Gold Coast",
      "cityCode": "OOL",
      "cityName": "Gold Coast",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:58:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne Airport",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 120,
    "price": 490
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 597,
    "start": {
      "dateTime": "2016-07-20T00:36:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T06:37:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 999
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 405,
    "start": {
      "dateTime": "2016-07-21T17:17:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T23:18:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 390
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 347,
    "start": {
      "dateTime": "2016-07-22T07:54:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T13:55:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 114
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-23T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 555
  },
    {
    "airline": {
      "code": "SQ",
      "name": "Singapore"
    },
    "flightNum": 770,
    "start": {
      "dateTime": "2016-07-24T04:45:00+10:00",
      "airportCode": "BNE",
      "airportName": "Brisbane",
      "cityCode": "BNE",
      "cityName": "Brisbane",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T10:46:00-04:00",
      "airportCode": "MEL",
      "airportName": "Melbourne",
      "cityCode": "MEL",
      "cityName": "Melbourne",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 180,
    "price": 512
  }];
        flights.collection.insert(dataBag, onInsert);

        function onInsert(err, docs) {
            if (err) {
                console.log('error');
            } else {
                console.info('%d data were successfully stored.', docs.length);
                console.log('success');
            }
        }   
});


