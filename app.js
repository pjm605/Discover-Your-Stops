var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan')
var port = process.env.PORT || 8080;
var indexHtmlPath = path.join(__dirname, '/browser/index.html')

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/browser'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));


app.use('/api/home', require('./routes/home.js'));
app.use('/api/result', require('./routes/result.js'))





app.get('/*', function (req, res) {
    //console.log('about to send index', indexHtmlPath)
    res.sendFile(indexHtmlPath);
});

app.use(function (err, req, res, next) {
  console.error('Error:', err.message);
  res.status(err.status || 500).send(err.message);
});

app.listen(port);
console.log('Magic happens on port ' + port);