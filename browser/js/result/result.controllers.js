 app.controller('ResultCtrl', function ($scope, MainFactory, $log, $state, $stateParams, results) {

 	console.log("from app.controller")
 	console.log(results);
 	if(results.data === "") $scope.resultsHaveError = true;
 	else $scope.results = results.data

})