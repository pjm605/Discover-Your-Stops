var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

module.exports = app; // this line is only used to make testing easier.

var router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);





app.use(function (err, req, res, next) {
  console.error('Error:', err.message);
  res.status(err.status || 500).send(err.message);
});

app.listen(port);
console.log('Magic happens on port ' + port);