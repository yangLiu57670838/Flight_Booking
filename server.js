var express = require("express"),
    app = express(),
//    path = require("path"),
    bodyParser = require('body-parser'),
    request = require('request'),
    sys = require('util'),
    fs = require('fs'),
    fspath = require('path');

//global.app = express();
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
    
    
    
    res.end();
    
});
router.get('/search', function(req, res) {
    console.log(req.query.from);
    
    
    
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.use('/api', router);//prefix router

app.get('/',function(req,res){
    res.sendFile(__dirname + "/views/index.html");
    });

//app.use('/', express.static(__dirname + '/app/html'));
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Running at Port 8080");