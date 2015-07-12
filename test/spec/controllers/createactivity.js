'use strict';

describe('Controller: CreateactivityCtrl', function () {

  // load the controller's module
  beforeEach(module('159webApp'));

  var CreateactivityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateactivityCtrl = $controller('CreateactivityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
