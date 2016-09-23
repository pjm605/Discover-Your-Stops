
'use strict';

var app = angular.module('myApp', ['vsGoogleAutocomplete', 'ui.router']);

app.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});

app.controller('MainCtrl', function($scope, MainFactory, $log, $state) {
  
  $scope.options = {
    types: ['(cities)'],
    componentRestrictions: { country: 'FR' }
  };

  //$scope.results = { res : ['aa', 'bb']}



  $scope.search = function (from, to) {
  	var cFrom = from.split(",")[0]
  	var cTo = to.split(",")[0]
    //$scope.results.push('cc'); 
    //$scope.results.res2 = ['cc'];


    

  	//$state.go('result', {cFrom: cFrom, cTo: cTo})
    console.log($scope.results);
    

    var promise = MainFactory.getResult(cFrom, cTo);

  	
  	promise.then(function (results) {

  		//$scope.hello = "hello"
      //$state.go('result')
            $scope.hello = "bbboo"

  		$scope.results = results.data
      console.log(results.data)
      console.log($scope)

$state.go('result')
//return results.data

  	})
  };

  //$scope.results = $scope.search;

  
});

app.service('MainFactory', function ($http, $log) {
	

	return {
		getResult: function (from, to) {
			return $http.get('/api/result/?dName=' + from + "&oName=" + to)
		}
	}

});

app.config(function ($stateProvider) {

  $stateProvider.state('result', {
    url: '/result/',
    templateUrl: '/js/result/result.html',
    controller: 'MainCtrl'
    // resolve: {
    //   results: function (MainFactory, $stateParams) {
    //     return MainFactory.getResult($stateParams.cFrom, $stateParams.cTo);
    //   }
    // }
  });

});