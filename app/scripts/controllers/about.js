'use strict';

/**
 * @ngdoc function
 * @name angularPApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPApp
 */
angular.module('angularPApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
