var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan')
var port = process.env.PORT || 8080;
var router = require('./routes');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router)




app.get('/api/testpage', function(req, res, next) {
	res.send({
		name: "SEANNNN"
	});
});

app.get('*', function (req, res) {
	res.sendfile('./public/index.html')
})


app.use(function (err, req, res, next) {
  console.error('Error:', err.message);
  res.status(err.status || 500).send(err.message);
});




app.listen(port);
console.log('Magic happens on port ' + port);