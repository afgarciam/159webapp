'use strict';

/**
 * @ngdoc function
 * @name 159webApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the 159webApp
 */
angular.module('159webApp')
  .controller('ActivitiesCtrl', function ($scope,$http,$rootScope,$window,config) {
    $scope.api = config.urlImg;
    $http({
      method:'GET',
      url:config.urlApi+'activities/'
    })
    .success(function(res){
      $scope.activities = res;
    });
    $scope.verActividad = function(activity){
      $rootScope.activity = activity;
      $window.location = '#/activity/detail';
    };
  });
