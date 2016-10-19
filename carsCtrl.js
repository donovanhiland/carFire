angular.module('app')
  .controller('carsCtrl', function($scope, carsService) {

    $scope.cars = carsService.carsRef;

  });
