'use strict';

/**
 * @ngdoc function
 * @name 159webApp.controller:InvitationCtrl
 * @description
 * # InvitationCtrl
 * Controller of the 159webApp
 */
angular.module('159webApp')
  .controller('InvitationCtrl', function ($scope, $http, config) {
    $scope.invitation = {};
    $scope.result={
      titl:'',
      class:'',
      message:''
    };
    $scope.addMe = function(){
      $http({
        method:'POST',
        url:config.urlApi+'invitation/',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .success(function(resp){
        $scope.result.titl ='Exito!';
        $scope.result.class = 'success';
        $scope.result.message = 'Tu invitacion ha sido enviada.';
        $scope.send = true;
        $scope.invitation = {};
      })
      .error(function(resp){
        $scope.result.titl = 'Error';
        $scope.result.class = 'danger';
        $scope.result.message = 'No hemos podido enviar tu invitacion.';
        $scope.send = true;
      });
    }
  });
