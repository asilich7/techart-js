(function() {
  'use strict';

  function filter(array, callback) {
    var filteredArray = [];

    array.forEach(function(element) {
      if(callback(element) === true) {
        filteredArray.push(element);
      }
    });
    return filteredArray;
  }

  module.exports.filter = filter;
})();
