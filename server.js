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
router.get('/hello', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.use('/api', router);//prefix router

app.get('/',function(req,res){
    res.sendFile(__dirname + "/views/index.html");
    });

//app.use('/', express.static(__dirname + '/app/html'));
app.listen(3000);
console.log("Running at Port 3000");