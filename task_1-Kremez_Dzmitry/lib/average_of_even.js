'use strict';

function averageOfEven(array) {
  var sum = 0;
  var count = 0;

  array.forEach(function (item) {
    if (item % 2 === 0) {
      sum += item;
      count++;
    }
  });

  return sum / count;
}

module.exports = averageOfEven;