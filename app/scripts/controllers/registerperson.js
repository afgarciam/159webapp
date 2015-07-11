'use strict';

/**
* @ngdoc function
* @name 159webApp.controller:RegisterpersonCtrl
* @description
* # RegisterpersonCtrl
* Controller of the 159webApp
*/
angular.module('159webApp')
.controller('RegisterpersonCtrl', function ($scope,$http,config) {
  $scope.result={
    titl:'',
    class:'',
    message:''
  };
  $scope.send = false;
  $scope.changeSend = function(){
    $scope.send = false;
  };
  $scope.registerPerson = function(){
    var datos = $.param({
      first_name: $scope.person.name,
      last_name:$scope.person.lastName,
      phone:$scope.person.phone ,
      direction:$scope.person.direction,
      birth_date:$scope.person.dateBirth,
      email:$scope.person.eMail,
      id_number:$scope.person.numberId,
      sex:$scope.person.sex,
      document_type:$scope.person.typeId,
      password:$scope.person.password,
      town:1
    });

    $http({
      method:'POST',
      url:config.urlApi+'persons/',
      data:datos,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(resp){
      $scope.result.titl ='Exito!';
      $scope.result.class = 'success';
      $scope.result.message = 'Registro exitoso.';
      $scope.send = true;
      $scope.person = {};
    })
    .error(function(resp){
      $scope.result.titl = 'Error';
      $scope.result.class = 'danger';
      $scope.result.message = 'Error al registrar.';
      $scope.send = true;
    });
  };

  //"first_name=juan&last_name=perez&phone=12345678&direction=10+ave+10-0+guatemala&birth_date=2015-07-29&email=juan%40dominio.com&id_number=123456789&sex=1&document_type=1&town=1"

});
