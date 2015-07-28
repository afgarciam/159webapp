'use strict';

/**
* @ngdoc function
* @name 159webApp.controller:CreatecommunityCtrl
* @description
* # CreatecommunityCtrl
* Controller of the 159webApp
*/
angular.module('159webApp')
.controller('CreatecommunityCtrl', function ($scope,$http,config) {
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
  $scope.addObjective = function(o){
    $scope.objectives.push(o);
    $scope.objective = '';
  };
  $scope.remObjective = function(o){
    var idx = $scope.objectives.indexOf(o);
    $scope.objectives.splice(idx,1);
  };
  $scope.sectors = [];
  $scope.serctor = {};
  var getSectors = function(){
    $http({
      method:'GET',
      url:config.urlApi+'sectors/'
    })
    .success(function(res){
      $scope.sectors = res;
    });
    $scope.sector = $scope.sectors[3];
  };
  getSectors();
  $scope.createCommunity = function(){
    var datos = $.param({
      name: $scope.community.name,
      purpose: $scope.community.purpose,
      idSector: $scope.community.sector.id,
      idPerson: 15,
      objectives: JSON.stringify($scope.objectives)
    });

    $http({
      method:'POST',
      url:config.urlApi+'communities/',
      data:datos,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(resp){
      $scope.result.titl ='Exito!';
      $scope.result.class = 'success';
      $scope.result.message = 'Tu comunidad ha sido creada.';
      $scope.send = true;
      $scope.community = {};
      $scope.objectives = [];
      $scope.objective ='';
    })
    .error(function(resp){
      $scope.result.titl = 'Error';
      $scope.result.class = 'danger';
      $scope.result.message = 'No hemos podido crear tu comunidad.';
      $scope.send = true;
    });
  };
});
