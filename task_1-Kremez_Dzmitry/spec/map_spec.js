describe('map', function () {
  var map = require('../lib/map');

  it("return new mapped array", function () {
    var array = [3, 1, 2, 4];
    expect(map(array, function (x) {
      return x * x;
    })).toEqual([9, 1, 4, 16]);
  });

  it("return new array", function () {
    var array = [3, 1, 2, 4];
    expect(map(array, function (x) {
      return x * x;
    })).not.toEqual(array);
  });
});