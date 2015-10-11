'use strict';

function sort(array) {
  array.forEach(function (item, i) {
    var tmp = item;
    for (var j = i; j > 0 && tmp < array[j - 1]; j--) {
      array[j] = array[j - 1];
    }
    array[j] = tmp;
  });

  return array;
}

module.exports = sort;
