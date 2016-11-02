describe('Everage of even numbers', function () {
  var averageOfEven = require('../lib/average_of_even');

  it("return everage of even numbers", function () {
    var array = [3, 1, 2, 4];
    expect(averageOfEven(array)).toEqual(3);
    array = [3, 16, 2, 4, 8];
    expect(averageOfEven(array)).toEqual(7.5);
  });
});
