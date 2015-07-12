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
  'ngTouch',
  'uiGmapgoogle-maps',
])
.constant('config',{
  'urlApi':'http://192.168.0.159:8000/api/',
  'urlImg':'http://192.168.0.159:8000',
  'formatoFecha' : 'dd/MM/yyyy'
})
.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/activity/list', {
    templateUrl: 'views/activity/activities.html',
    controller: 'ActivitiesCtrl'
  })
  .when('/activity/detail', {
    templateUrl: 'views/activity/activitydetail.html',
    controller: 'ActivitydetailCtrl'
  })
  .when('/activity/create', {
    templateUrl: 'views/activity/createactivity.html',
    controller: 'CreateactivityCtrl'
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

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBT3ghh6hRocWTe3i0aOWlqnNOUUzMcFok',
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });
});
