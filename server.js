var express = require("express"),
//    app = express(),
//    path = require("path"),
    bodyParser = require('body-parser'),
    request = require('request'),
    sys = require('util'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    moment = require('moment'),
    fspath = require('path');

global.app = express();
var requireTree = function (dir) {
    dir = fspath.join(__dirname, dir);
    fs.readdirSync(dir).forEach(function (file) {
        if (/(.*)\.js$/.test(file))
            require(fspath.join(dir, file));
    });
};

requireTree('controllers');
app.use('/', express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var router = express.Router();

router.get('/airlines', function(req, res) {
    console.log('start searching all airlines');    
//    var airlines = require('./models/airlines');
//    var post = new airlines({code: "asadas", name: "virgin"});
//    post.save(function (err) {
//    if (err) {
//            return err;
//    }
//    else {
//            console.log("Post saved");
////            mongoose.disconnect(); 
//    }
//    });
    
//    var airlines = require('./models/airlines');
//    airlines.remove(function(err,removed) {
//        console.log(removed);
//    });  
    var airlines = require('./models/airlines');
    airlines.find(function(err, airlines) {
        if (err) return console.error(err);
        console.log(airlines);
        res.json(airlines);
        });   
});

router.get('/airports', function(req, res) {
    var city = req.query.city;
    var airports = require('./models/airports');
    airports.find({ cityName: city }, function(err, airport) {
        if (err) return console.error(err);
        console.log(airport);
        res.send(airport[0].airportCode);
    });   
});

router.get('/flight_search/SU', function(req, res) {
    console.log('starting search for Aeroflot airline at', req.query.date);
    var date3 = moment(req.query.date).format('YYYY-MM-DD');
    var date1 = moment(req.query.date).subtract(2, 'days').format('YYYY-MM-DD');
    var date2 = moment(req.query.date).subtract(1, 'days').format('YYYY-MM-DD');
    var date4 = moment(req.query.date).add(1, 'days').format('YYYY-MM-DD');
    var date5 = moment(req.query.date).add(2, 'days').format('YYYY-MM-DD');
    console.log(date1 + date2 + date3 + date4 + date5);
    var flights = require('./models/flights');
    flights.find({}, function(err, flights) {
        if (err) return console.error(err);
        
        console.log(flights[0].airline[0].code);
        var resultFlights = [];
        for (i = 0; i < flights.length; i++)
            {
                var nnn = moment(flights[i].start[0].dateTime).format('YYYY-MM-DD');
                
                if ((flights[i].airline[0].code == 'SU') && (flights[i].start[0].airportCode == req.query.fromAirportCode) && (flights[i].finish[0].airportCode == req.query.toAirportCode) && ((nnn == date1) || (nnn == date2) || (nnn == date3) || (nnn == date4) || (nnn == date5)))
                    {
                        resultFlights.push(flights[i]);
                    }
            }
        console.log(resultFlights.length);
        res.json(resultFlights);
    });
    
});

router.get('/flight_search/MU', function(req, res) {
    console.log('starting search for China Eastern airline at', req.query.date);
    var date3 = moment(req.query.date).format('YYYY-MM-DD');
    var date1 = moment(req.query.date).subtract(2, 'days').format('YYYY-MM-DD');
    var date2 = moment(req.query.date).subtract(1, 'days').format('YYYY-MM-DD');
    var date4 = moment(req.query.date).add(1, 'days').format('YYYY-MM-DD');
    var date5 = moment(req.query.date).add(2, 'days').format('YYYY-MM-DD');
    var flights = require('./models/flights');
    flights.find({}, function(err, flights) {
        if (err) return console.error(err);
        
        console.log(flights[0].airline[0].code);
        var resultFlights = [];
        for (i = 0; i < flights.length; i++)
            {
                var nnn = moment(flights[i].start[0].dateTime).format('YYYY-MM-DD');
                
                if ((flights[i].airline[0].code == 'MU') && (flights[i].start[0].airportCode == req.query.fromAirportCode) && (flights[i].finish[0].airportCode == req.query.toAirportCode) && ((nnn == date1) || (nnn == date2) || (nnn == date3) || (nnn == date4) || (nnn == date5)))
                    {
                        resultFlights.push(flights[i]);
                    }
            }
        console.log(resultFlights.length);
        res.json(resultFlights);
    });
});

router.get('/flight_search/EK', function(req, res) {
    console.log('starting search for Emirates airline', req.query.date);
    var date3 = moment(req.query.date).format('YYYY-MM-DD');
    var date1 = moment(req.query.date).subtract(2, 'days').format('YYYY-MM-DD');
    var date2 = moment(req.query.date).subtract(1, 'days').format('YYYY-MM-DD');
    var date4 = moment(req.query.date).add(1, 'days').format('YYYY-MM-DD');
    var date5 = moment(req.query.date).add(2, 'days').format('YYYY-MM-DD');
    var flights = require('./models/flights');
    flights.find({}, function(err, flights) {
        if (err) return console.error(err);
        
        console.log(flights[0].airline[0].code);
        var resultFlights = [];
        for (i = 0; i < flights.length; i++)
            {
                var nnn = moment(flights[i].start[0].dateTime).format('YYYY-MM-DD');
                
                if ((flights[i].airline[0].code == 'EK') && (flights[i].start[0].airportCode == req.query.fromAirportCode) && (flights[i].finish[0].airportCode == req.query.toAirportCode) && ((nnn == date1) || (nnn == date2) || (nnn == date3) || (nnn == date4) || (nnn == date5)))
                    {
                        resultFlights.push(flights[i]);
                    }
            }
        console.log(resultFlights.length);
        res.json(resultFlights);
    });
});

router.get('/flight_search/KE', function(req, res) {
    console.log('starting search for Korean Airlines airline', req.query.date);
    var date3 = moment(req.query.date).format('YYYY-MM-DD');
    var date1 = moment(req.query.date).subtract(2, 'days').format('YYYY-MM-DD');
    var date2 = moment(req.query.date).subtract(1, 'days').format('YYYY-MM-DD');
    var date4 = moment(req.query.date).add(1, 'days').format('YYYY-MM-DD');
    var date5 = moment(req.query.date).add(2, 'days').format('YYYY-MM-DD');
    var flights = require('./models/flights');
    flights.find({}, function(err, flights) {
        if (err) return console.error(err);
        
        console.log(flights[0].airline[0].code);
        var resultFlights = [];
        for (i = 0; i < flights.length; i++)
            {
                var nnn = moment(flights[i].start[0].dateTime).format('YYYY-MM-DD');
                
                if ((flights[i].airline[0].code == 'KE') && (flights[i].start[0].airportCode == req.query.fromAirportCode) && (flights[i].finish[0].airportCode == req.query.toAirportCode) && ((nnn == date1) || (nnn == date2) || (nnn == date3) || (nnn == date4) || (nnn == date5)))
                    {
                        resultFlights.push(flights[i]);
                    }
            }
        console.log(resultFlights.length);
        res.json(resultFlights);
    });
});

router.get('/flight_search/QF', function(req, res) {
   console.log('starting search for Qantas airline', req.query.date);
   var date3 = moment(req.query.date).format('YYYY-MM-DD');
    var date1 = moment(req.query.date).subtract(2, 'days').format('YYYY-MM-DD');
    var date2 = moment(req.query.date).subtract(1, 'days').format('YYYY-MM-DD');
    var date4 = moment(req.query.date).add(1, 'days').format('YYYY-MM-DD');
    var date5 = moment(req.query.date).add(2, 'days').format('YYYY-MM-DD');
    var flights = require('./models/flights');
    flights.find({}, function(err, flights) {
        if (err) return console.error(err);
        
        console.log(flights[0].airline[0].code);
        var resultFlights = [];
        for (i = 0; i < flights.length; i++)
            {
                var nnn = moment(flights[i].start[0].dateTime).format('YYYY-MM-DD');
                
                if ((flights[i].airline[0].code == 'QF') && (flights[i].start[0].airportCode == req.query.fromAirportCode) && (flights[i].finish[0].airportCode == req.query.toAirportCode) && ((nnn == date1) || (nnn == date2) || (nnn == date3) || (nnn == date4) || (nnn == date5)))
                    {
                        resultFlights.push(flights[i]);
                    }
            }
        console.log(resultFlights.length);
        res.json(resultFlights);
    });
});

router.get('/flight_search/SQ', function(req, res) {
    console.log('starting search for Singapore airline', req.query.date);
    var date3 = moment(req.query.date).format('YYYY-MM-DD');
    var date1 = moment(req.query.date).subtract(2, 'days').format('YYYY-MM-DD');
    var date2 = moment(req.query.date).subtract(1, 'days').format('YYYY-MM-DD');
    var date4 = moment(req.query.date).add(1, 'days').format('YYYY-MM-DD');
    var date5 = moment(req.query.date).add(2, 'days').format('YYYY-MM-DD');
    console.log(date1 + date2 + date3 + date4 + date5);
    var flights = require('./models/flights');
    flights.find({}, function(err, flights) {
        if (err) return console.error(err);
        
        console.log(flights[0].airline[0].code);
        var resultFlights = [];
        for (i = 0; i < flights.length; i++)
            {
                var nnn = moment(flights[i].start[0].dateTime).format('YYYY-MM-DD');
                
                if ((flights[i].airline[0].code == 'SQ') && (flights[i].start[0].airportCode == req.query.fromAirportCode) && (flights[i].finish[0].airportCode == req.query.toAirportCode) && ((nnn == date1) || (nnn == date2) || (nnn == date3) || (nnn == date4) || (nnn == date5)))
                    {
                        resultFlights.push(flights[i]);
                    }
            }
        console.log(resultFlights.length);
        res.json(resultFlights);
    });
});

app.use('/api', router);//prefix router

app.get('/',function(req,res){
    res.sendFile(__dirname + "/views/index.html");
    });

//app.use('/', express.static(__dirname + '/app/html'));
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Running at Port 8080");