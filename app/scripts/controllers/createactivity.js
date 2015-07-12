'use strict';

/**
* @ngdoc function
* @name 159webApp.controller:CreateactivityCtrl
* @description
* # CreateactivityCtrl
* Controller of the 159webApp
*/
angular.module('159webApp')
.controller('CreateactivityCtrl', function ($scope,$http,$rootScope,config,uiGmapGoogleMapApi) {
  $scope.community = {
    id:$rootScope.communityId,
    name:$rootScope.communityName
  };
  $scope.point = {
    'latitude': 14.613411429802484,
    'longitude': -90.53492810058594
  };
  uiGmapGoogleMapApi.then(function (maps) {
    $scope.maps = maps;
    $scope.map = { center: { latitude: $scope.point.latitude, longitude: $scope.point.longitude }, zoom: 16 , bounds:{}};
  });
  $scope.marker = {
    id: 1,
    coor: {
      latitude: $scope.point.latitude,
      longitude: $scope.point.longitude
    },
    options: {
      draggable: true,
      labelContent: "lat: " + $scope.point.latitude + ' ' + 'lon: ' + $scope.point.longitude,
      labelAnchor: "100 0",
      labelClass: "label label-success"},
      animate:1,
      events: {
        dragend: function (marker, eventName, args) {
          $scope.point.latitude = marker.getPosition().lat();
          $scope.point.longitude = marker.getPosition().lng();
        }
      }
    };
    $scope.result={
      titl:'',
      class:'',
      message:''
    };
    $scope.send = false;
    $scope.objectives =[];
    $scope.changeSend = function(){
      $scope.send = false;
    };
    $scope.createActivity = function(){
      if($scope.community.id == null){
        $scope.community.id = 6;
      }
      var datos = $.param({
        name: $scope.activity.name,
        description:$scope.activity.description,
        begin_date: new Date($scope.activity.beginDate).toISOString(),
        end_date:new Date($scope.activity.endDate).toISOString(),
        latitude:$scope.point.latitude,
        longitude:$scope.point.longitude,
        minimum_assistant: $scope.activity.assistant,
        town: 1,
        community:$scope.community.id
      });

      $http({
        method:'POST',
        url:config.urlApi+'activities/',
        data:datos,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .success(function(resp){
        $scope.result.titl ='Exito!';
        $scope.result.class = 'success';
        $scope.result.message = 'Tu actividad ha sido creada.';
        $scope.send = true;
        $scope.activity = {};
        $scope.point = {
          'latitude': 14.613411429802484,
          'longitude': -90.53492810058594
        };
      })
      .error(function(resp){
        $scope.result.titl = 'Error';
        $scope.result.class = 'danger';
        $scope.result.message = 'No hemos podido crear tu actividad.';
        $scope.send = true;
      });
    };

  });
