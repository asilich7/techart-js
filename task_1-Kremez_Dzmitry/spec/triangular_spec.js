describe('triangular', function () {
  var triangular = require('../lib/triangular');

  it("return triangular n number", function () {
    expect(triangular(0)).toEqual(1);
    expect(triangular(1)).toEqual(3);
    expect(triangular(2)).toEqual(6);
    expect(triangular(3)).toEqual(6);
    expect(triangular(5)).toEqual(28);
  });
});