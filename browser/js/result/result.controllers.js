 app.controller('ResultCtrl', function ($scope, MainFactory, $log, $state, $stateParams, results) {
 	if(results.data === "") $scope.resultsHaveError = true;
 	else $scope.results = results.data

})