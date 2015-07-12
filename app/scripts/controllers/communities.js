'use strict';

/**
* @ngdoc function
* @name 159webApp.controller:CommunitiesCtrl
* @description
* # CommunitiesCtrl
* Controller of the 159webApp
*/
angular.module('159webApp')
.controller('CommunitiesCtrl', function ($scope,$http,$rootScope,config) {
  $scope.ip=config.urlImg;
  $http({
    method:'GET',
    url:config.urlApi+'communities/'
  })
  .success(function(res){
    $scope.communities = res;
  });
  $scope.addActivity = function(com){
    $rootScope.communityId = com.id;
    $rootScope.communityName = com.name;
    window.location = '#/activity/create/';
  };
});
