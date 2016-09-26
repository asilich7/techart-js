'use strict';

function map(array, callback) {
  var newArray = [];
  array.forEach(function (item) {
    newArray.push(callback(item));
  });

  return newArray;
}

module.exports = map;