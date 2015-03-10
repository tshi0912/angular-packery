describe('Controllers: PackeryController', function () {

  beforeEach(module('angular-packery'));

  var scope, vm;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    vm = $controller('PackeryController', {
      $scope: scope
    });
  }));

  it('has correct initial values', function () {
    expect(vm.packeryInstantiated).toBe(false);
    expect(vm.packeryDraggable).toBe(false);
    expect(vm.dragHandle).toBe(undefined);
    expect(typeof vm.uniqueId).toBe('number');
    expect(vm.packery).toEqual({});
  });

});
