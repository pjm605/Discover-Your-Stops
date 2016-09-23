app.controller('ActivityCtrl', function ($scope, MainFactory, $log, $state, $stateParams) {

  $scope.location = $stateParams.location
  MainFactory.getStops( $scope.location )
  .then(function (activities) {
    $scope.activities = activities.data.activities
  })
  .catch($log.error)


})