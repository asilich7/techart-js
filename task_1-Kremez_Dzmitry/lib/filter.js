'use strict';

function filter(array, condition) {
  var filteredArray = [];

  array.forEach(function (item) {
    if (condition(item)) {
      filteredArray.push(item);
    }
  });

  return filteredArray;
}

module.exports = filter;