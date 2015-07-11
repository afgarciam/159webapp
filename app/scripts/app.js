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
.constant('config',{
  'urlApi':'http://192.168.0.159:8000/api/',
  'formatoFecha' : 'dd/MM/yyyy'
})
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
  .when('/person/register',{
    templateUrl:'views/person/registerperson.html',
    controller:'RegisterpersonCtrl'
  })
  .when('/community/list',{
    templateUrl:'views/community/communities.html',
    controller:'CommunitiesCtrl'
  })
  .when('/community/create',{
    templateUrl:'views/community/createcommunity.html',
    controller:'CreatecommunityCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
