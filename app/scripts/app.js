'use strict';

/**
 * @ngdoc overview
 * @name angularPApp
 * @description
 * # angularPApp
 *
 * Main module of the application.
 */
angular
  .module('angularPApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
