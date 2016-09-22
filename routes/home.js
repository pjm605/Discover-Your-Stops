var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.get('/', function(req, res, next) {
	// unirest.get("https://rome2rio12.p.mashape.com/Search?currency=usd&dKind=City&dName=new+york&oKind=City&oName=chicago")
	// .header("X-Mashape-Key", "UGMUcYPwJkmshVBGRK8isF5PCE9Ap1ea4B5jsnPk1ebbElIiQ6")
	// .header("Accept", "application/json")
	// .end(function (result) {
	// 	  res.json(result.body);
	// });

	unirest.get("https://rome2rio12.p.mashape.com/Search?currency=usd&dKind=City&dName=new+york&oKind=City&oName=chicago")
	.header("X-Mashape-Key", "UGMUcYPwJkmshVBGRK8isF5PCE9Ap1ea4B5jsnPk1ebbElIiQ6")
	.header("Accept", "application/json")
	.end(function (result) {
		  res.json(result.body);
	});
});


// router.get('/', function (req, res, next) {

// })

module.exports = router;










