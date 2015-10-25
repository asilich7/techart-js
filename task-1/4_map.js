(function() {
  'use strict';

  function map(array, callback) {
    var newArray = [];

    array.forEach(function(element) {
      newArray.push(callback(element));
    });
    return newArray;
  }

  module.exports.map = map;
})();
