describe('Directive: packeryObject (template)', function () {

  var $compile, $rootScope, packery;

  beforeEach(function () {
    module('angular-packery');
    module('packeryTemplates');
  });

  beforeEach(inject(function (_$controller_, _$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    packery = $compile('<packery></packery>')($rootScope);

    $rootScope.$digest();
  }));

  it('replaces a packery-object element with div.packery-object and transcludes content', function () {
    var container = packery[0].querySelectorAll('.packery-container'),
        el = angular.element(container).append($compile('<packery-object>Test me!</packery-object>')($rootScope)),
        compiledEl;

    $rootScope.$digest();

    compiledEl = el.contents()[0];

    expect(angular.element(compiledEl).hasClass('packery-object')).toBe(true);
    expect(angular.element(compiledEl).text()).toBe('Test me!');
  });

  it('replaces a packery-object attribute with div.packery-object and transcludes content', function () {
    var container = packery[0].querySelectorAll('.packery-container'),
        el = angular.element(container).append($compile('<div packery-object>Test me!</div>')($rootScope)),
        compiledEl;

    $rootScope.$digest();

    compiledEl = el.contents()[0];

    expect(angular.element(compiledEl).hasClass('packery-object')).toBe(true);
    expect(angular.element(compiledEl).text()).toBe('Test me!');
  });

});
