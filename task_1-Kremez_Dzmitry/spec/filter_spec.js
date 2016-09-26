describe('filter', function () {
  var filter = require('../lib/filter');

  it("return find elements", function () {
    var array = [3, 1, 2, 4];
    expect(filter(array, function (x) {
      return x > 2;
    })).toEqual([3, 4]);
  });

  it("return empty array if can't find elements", function () {
    var array = [3, 1, 2, 4];
    expect(filter(array, function (x) {
      return x > 5;
    })).toEqual([]);
  });
});