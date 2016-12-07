app.factory('MapFactory', function () {
	var googleMapService = {};

	googleMapService.initMap = function(location) { 
		var myLatLng = {lat: 39.50, lng: -98.35};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 5,
			center:  myLatLng
		});
		var geocoder = new google.maps.Geocoder();
		geocodeAddress(geocoder, map, location);
		return map;
	}

	function geocodeAddress(geocoder, resultsMap, location) {
		geocoder.geocode({'address': location}, function(results, status) {
			if (status === 'OK') {
				resultsMap.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: resultsMap,
					position: results[0].geometry.location
				});
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}
	return googleMapService;
})