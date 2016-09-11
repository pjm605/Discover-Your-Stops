const express = require('express');
const router = express.Router();
var unirest = require('unirest');






router.get('/users', function (req, res, next) {
  const people = todos.listPeople();
  res.json(people); // automatically sets 200 status
});

router.get('/testpage', function(req, res, next) {
	unirest.get("https://rome2rio12.p.mashape.com/Search?currency=AUD&dKind=City&dName=Berne&dPos=46.94926%2C7.43883&oKind=City&oName=Z%C3%BCrich+HB&oPos=47.37819%2C8.54019")
.header("X-Mashape-Key", "0vI0lPMUQomshruhPPVBJWyyIKLip1pWRd1jsngjMxzmiBDbtO")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  res.json(result.body);
});
})

module.exports = router;