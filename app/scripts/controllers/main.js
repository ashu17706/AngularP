'use strict';

/**
 * @ngdoc function
 * @name angularPApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPApp
 */
angular.module('angularPApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
