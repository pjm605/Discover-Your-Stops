var router = require('express').Router();
var unirest = require('unirest');


router.get('/activity/:location', function (req, res, next) {
	
	unirest.get("http://terminal2.expedia.com/x/activities/search?location=" + req.params.location +"&apikey=coF3y0gATlGMfiHUuzrO3VJGFol4Vt9V")
	.header("Accept", "application/json")
		.end(function (result) {
		  res.json(result.body);
		});
} )


module.exports = router;
