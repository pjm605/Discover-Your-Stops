
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

  $scope.search = function (from, to) {
  	var cFrom = from.split(",")[0]
  	var cTo = to.split(",")[0]

    MainFactory.getResult(cFrom, cTo)
  	.then(function (results) {
  		$scope.results = results.data
      $state.go('result')
  	})
    .catch($log.error)
  };

  
});

app.controller('StopCtrl', function ($scope, MainFactory, $log, $state, $stateParams) {

  $scope.location = $stateParams.location
  MainFactory.getStops( $scope.location )
  .then(function (results) {
    $scope.results = results.data
  })
  .catch($log.error)
})

app.service('MainFactory', function ($http, $log) {

	return {
		getResult: function (from, to) {
			return $http.get('/api/result/?dName=' + from + "&oName=" + to)
		},
    getStops: function (location) {
      return $http.get('/api/result/stops/' + location)
    }
	}
});

app.config(function ($stateProvider) {

  $stateProvider.state('result', {
    url: '/result',
    templateUrl: '/js/result/result.html',
    controller: 'MainCtrl'
  });

});

app.config(function ($stateProvider) {

  $stateProvider.state('stops', {
    url: '/stops/:location',
    templateUrl: '/js/stop/stop.html',
    controller: 'StopCtrl'
  });

});



