
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






