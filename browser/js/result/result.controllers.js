app.controller('ResultCtrl', function ($scope, MainFactory, $stateParams, results) {
 	if(results.data === "") $scope.resultsHaveError = true;

 	else {
 		for (var i = 0; i < results.data.length; i++) {
 			var d = results.data[i];
 			for(var j = 0; j < d.stops.length; j++) {
 				var stop = d.stops[j];
 				if(j < d.segments.length) {
 					stop.segment = d.segments[j].kind;
 				}
 			}
 		}
 		$scope.results = results.data;
 	}
})