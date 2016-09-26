(function() {
  'use strict';

  function search(array, condition) {
    for(var i = 0; i < array.length; i++) {
      if(condition(array[i]) === true) {
        return array[i];
      }
    }
    return null;
  }

  module.exports.search = search;
})();
