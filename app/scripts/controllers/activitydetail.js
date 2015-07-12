'use strict';

/**
* @ngdoc function
* @name 159webApp.controller:ActivitydetailCtrl
* @description
* # ActivitydetailCtrl
* Controller of the 159webApp
*/
angular.module('159webApp')
.controller('ActivitydetailCtrl', function ($scope,$rootScope,$http,config,uiGmapGoogleMapApi) {
  $scope.activity = $rootScope.activity;
  $rootScope.activityAccept = 0;
  $scope.viewMap = false;
  var percent = 0;
  var percentAssistant = 0;
  $scope.comments = [];
  $scope.point ={};
  $scope.like ={
    yes:0,
    no:0
  };
  $scope.acept ={
    val:0,
    cssClass:'danger'
  };
  $scope.attend ={
    yes:0,
    no:0
  };
  $scope.assistant={
    val :0,
    cssClass :'danger'
  };
  $http({
    method:'GET',
    url:config.urlApi+'activities/4/'
  })
  .success(function(res){
    $scope.activity = res;
    $scope.point.latitude = res.latitude;
    $scope.point.longitude = res.longitude;
    $scope.marker.latitude = res.latitude;
    $scope.marker.longitude = res.longitude;
    $scope.initMap();
  });
  $scope.likeActivity = function(){
    $scope.like.yes++;
    calcAccept();
  };
  $scope.noLikeActivity = function(){
    $scope.like.no++;
    calcAccept();
  };
  $scope.attendActivity = function(){
    $scope.attend.yes++;
    calcAssistant();
  };
  $scope.noAttendActivity = function(){
    $scope.attend.no++;
    calcAssistant();
  };
  $scope.changeViewMap= function(){
    $scope.viewMap = !$scope.viewMap;
  };
  $scope.initMap = function(){
    uiGmapGoogleMapApi.then(function (maps) {
      $scope.maps = maps;
      $scope.map = { center: { latitude: 14.613411429802484, longitude: -90.53492810058594 }, zoom: 16 , bounds:{}};
    });
  }
  $scope.marker = {
    id: 1,
    coor: {
      latitude: $scope.point.latitude,
      longitude: $scope.point.longitude
    },
    options: {
      draggable: false,
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
    var calcAccept = function(){
      if(percent>=0 || percent<=99){
        percent = Math.round((($scope.like.yes-$scope.like.no)/$scope.like.yes)*100);
        if(percent>=66){
          $scope.acept.cssClass = 'success';
        }
        else if(percent>=33 && percent<=66){
          $scope.acept.cssClass = 'warning';
        }
        else if(percent <33){
          $scope.acept.cssClass = 'danger';
        }
        $scope.acept.val = percent;
      }
    };
    var calcAssistant = function(){
      if(percentAssistant >= 0 || percentAssistant <=99){
        percentAssistant = Math.round((($scope.attend.yes-$scope.attend.no)/$scope.activity.minimum_assistant)*100);
        if(percentAssistant>=66){
          $scope.assistant.cssClass = 'success';
        }
        else if(percentAssistant>=33 && percent<=66){
          $scope.assistant.cssClass = 'warning';
        }
        else if(percentAssistant <33){
          $scope.acept.cssClass = 'danger';
        }
        $scope.assistant.val = percentAssistant;
      }
    };
    $scope.addComment = function(){
      var comment = {
        date: new Date(),
        content: $scope.newComment
      };
      $scope.comments.push(comment);
      $scope.newComment = '';
    };
  });
