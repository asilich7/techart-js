'use strict';

function search(array, condition) {
  var findElement = null;

  array.forEach(function (item) {
    if (condition(item)) {
      findElement = item;
      return false;
    }
  });

  return findElement;
}

module.exports = search;