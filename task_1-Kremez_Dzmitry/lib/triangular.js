'use strict';

var triangularOf = function (value) {
  var abs = Math.abs(value);
  return ((abs / 2) * (abs + 1)) * (abs / value) || 0;
};

var numberOfDivisors = function (num) {
  var divisors = 0;
  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      if (num / i !== i)
        divisors++;
    }
  }
  return divisors;
};

function triangular(divisorsNumber) {
  var result;
  var i = 0;
  var j = triangularOf(i);

  while (divisorsNumber > numberOfDivisors(j)) {
    j = triangularOf(i++)
  }

  if (!result && numberOfDivisors(j) >= divisorsNumber) {
    var num = (i - 1) > 0 ? i - 1 : 1;
    result = triangularOf(num);
  }

  return result;
}

module.exports = triangular;