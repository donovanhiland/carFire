angular.module('app', ['ui.router', 'firebase'])

  .constant('firebaseRoot', 'https://mycarfireapp-donovan.firebaseio.com')

  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('cars', {
        url: '/cars',
        templateUrl: 'carsTmpl.html',
        // controller: 'carsCtrl',
        resolve: {
          carsRef: function(carsService, $stateParams) {
            return carsService.getCars();
          }
        }
      })
      .state('car', {
        url:  '/cars/:carId',
        templateUrl: 'carTmpl.html',
        // controller: 'carCtrl',
        resolve: {
          carRef: function (carsService, $stateParams) {
            return carsService.getCar($stateParams.carId);
          },
          commentsRef: function(carsService, $stateParams) {
            return carsService.getComments($stateParams.carId);
          }
        }
      });

      $urlRouterProvider.otherwise('/cars');
});
