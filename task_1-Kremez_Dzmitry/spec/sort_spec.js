describe('sort', function () {
  var sort = require('../lib/sort');

  it("return sorted array", function () {
    var array = [3, 1, 2, 4];
    expect(sort(array)).toEqual([1, 2, 3, 4]);
  });
});