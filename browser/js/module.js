
'use strict';

var app = angular.module('myApp', ['vsGoogleAutocomplete']);

app.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});

app.controller('MainCtrl', function($scope) {
  
  $scope.options = {
    types: ['(cities)'],
    componentRestrictions: { country: 'FR' }
  };

  $scope.name = "ABC"
  
});
