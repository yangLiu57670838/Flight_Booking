var express = require("express"),
//    app = express(),
//    path = require("path"),
    bodyParser = require('body-parser'),
    request = require('request'),
    sys = require('util'),
    fs = require('fs'),
    mongoose = require('mongoose'),
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

router.get('/search', function(req, res) {
    console.log(req.query.date);
      
});

app.use('/api', router);//prefix router

app.get('/',function(req,res){
    res.sendFile(__dirname + "/views/index.html");
    });

//app.use('/', express.static(__dirname + '/app/html'));
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Running at Port 8080");