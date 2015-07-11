'use strict';

describe('Controller: ActivitydetailCtrl', function () {

  // load the controller's module
  beforeEach(module('159webApp'));

  var ActivitydetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitydetailCtrl = $controller('ActivitydetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
