'use strict';

/**
* @ngdoc function
* @name 159webApp.controller:ActivitydetailCtrl
* @description
* # ActivitydetailCtrl
* Controller of the 159webApp
*/
angular.module('159webApp')
.controller('ActivitydetailCtrl', function ($scope,$rootScope,$http,config) {
  $scope.activity = $rootScope.activity;
  $rootScope.activityAccept = 0;
  var percent = 0;
  var percentAssistant = 0;
  $scope.comments = [];
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
    url:config.urlApi+'activities/1/'
  })
  .success(function(res){
    $scope.activity = res;
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
