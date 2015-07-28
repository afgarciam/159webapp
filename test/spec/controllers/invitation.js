'use strict';

describe('Controller: InvitationCtrl', function () {

  // load the controller's module
  beforeEach(module('159webApp'));

  var InvitationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvitationCtrl = $controller('InvitationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
