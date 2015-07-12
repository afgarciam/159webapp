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
  $scope.punto = {
    'latitude': 14.613411429802484,
    'longitude': -90.53492810058594
  };
  uiGmapGoogleMapApi.then(function (maps) {
    $scope.mapas = maps;
    $scope.mapa = { center: { latitude: $scope.punto.latitude, longitude: $scope.punto.longitude }, zoom: 16 , bounds:{}};
  });
  $scope.marcador = {
    id: 1,
    coords: {
      latitude: $scope.punto.latitude,
      longitude: $scope.punto.longitude
    },
    opciones: {
      draggable: true,
      labelContent: "lat: " + $scope.punto.latitude + ' ' + 'lon: ' + $scope.punto.longitude,
      labelAnchor: "100 0",
      labelClass: "label label-success"},
      animate:1,
      eventos: {
        dragend: function (marker, eventName, args) {
          $scope.punto.latitude = marker.getPosition().lat();
          $scope.punto.longitude = marker.getPosition().lng();
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
      var datos = $.param({
        name: $scope.activity.name,
        description:$scope.activity.description,
        begin_date: new Date($scope.activity.beginDate).toISOString(),
        end_date:new Date($scope.activity.endDate).toISOString(),
        latitude:$scope.punto.latitude,
        longitude:$scope.punto.longitude,
        minimum_assitant: $scope.activity.assistant,
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
      })
      .error(function(resp){
        $scope.result.titl = 'Error';
        $scope.result.class = 'danger';
        $scope.result.message = 'No hemos podido crear tu actividad.';
        $scope.send = true;
      });
    };

  });
