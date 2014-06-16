'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('decorApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET(/\.\.\/i18n\/.*/).respond({});

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('wonders who care.', function () {
    var someoneWhoCare = [];
    expect(someoneWhoCare.length).toBe(0);
  });
});
