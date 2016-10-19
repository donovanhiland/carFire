angular.module('app')
  .service('carsService', function(firebaseRoot) {

    thi.carsRef = new Firebase(firebaseRoot + '/cars');

    this.getCars = function() {
      return $firebaseArray(carsRef);
    };

    this.getCar = function(carId) {
      return $firebaseArray(carsRef +carId);
    }

    this.getComments = function(carId) {
      return $firebaseArray(carsRef + '/comments/' + carId);
    }

  });
