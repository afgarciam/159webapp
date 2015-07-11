'use strict';

/**
 * @ngdoc overview
 * @name 159webApp
 * @description
 * # 159webApp
 *
 * Main module of the application.
 */
angular
  .module('159webApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/activity/detail', {
        templateUrl: 'views/activity/activitydetail.html',
        controller: 'ActivitydetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
