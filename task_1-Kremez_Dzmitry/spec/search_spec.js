describe('search', function () {
  var search = require('../lib/search');

  it("return find element", function () {
    var array = [3, 1, 2, 4];
    expect(search(array, function (x) {
      return x > 3;
    })).toEqual(4);
  });

  it("return null if can't find element", function () {
    var array = [3, 1, 2, 4];
    expect(search(array, function (x) {
      return x > 5;
    })).toEqual(null);
  });
});