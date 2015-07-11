'use strict';

describe('Controller: CreatecommunityCtrl', function () {

  // load the controller's module
  beforeEach(module('159webApp'));

  var CreatecommunityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecommunityCtrl = $controller('CreatecommunityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
