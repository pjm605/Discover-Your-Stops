
'use strict';

var app = angular.module('myApp', ['vsGoogleAutocomplete', 'ui.router']);

app.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});


app.service('MainFactory', function ($http, $log) {

	return {
		getResult: function (from, to) {
			return $http.get('/api/result/?dName=' + from + "&oName=" + to)
		},
    getStops: function (location) {
      return $http.get('/api/result/activity/' + location)
    }
	}
});

app.controller('MainCtrl', function($scope, MainFactory, $log, $state) {
  
  $scope.options = {
    types: ['(cities)'],
    componentRestrictions: { country: 'FR' }
  };
  
  $scope.search = function (from, to) {
    var cFrom = from.split(",")[0]
    var cTo = to.split(",")[0]

    $scope.cFrom = cFrom;
    $scope.cTo = cTo;
    $state.go('result', {from: cFrom, to: cTo})
   
  };
  
});

app.controller('ActivityCtrl', function ($scope, MainFactory, $log, $state, $stateParams) {

  $scope.location = $stateParams.location
  MainFactory.getStops( $scope.location )
  .then(function (activities) {
    $scope.activities = activities.data.activities
  })
  .catch($log.error)


})

app.config(function ($stateProvider) {

  $stateProvider.state('result', {
    url: '/result/:from/:to',
    templateUrl: '/js/result/result.html',
    resolve: {
      results: function ($stateParams, MainFactory) {
        return MainFactory.getResult($stateParams.from, $stateParams.to)
      }
    },
    controller: 'ResultCtrl'
  });

});

app.config(function ($stateProvider) {

  $stateProvider.state('activity', {
    url: '/activity/:location',
    templateUrl: '/js/activity/activity.html',
    controller: 'ActivityCtrl'
  });

});

app.controller('ResultCtrl', function ($scope, MainFactory, $log, $state, $stateParams, results) {

 $scope.results = results.data

})


