var App = {};

App.ArraySearcher = (function() {

  'use strict';

  var areArgumentsValid = function(array, condition) {
    if (!array || !(array instanceof Array) || !(condition instanceof Function)) {
      console.log('Arguments are invalid');
      return false;
    }
    return true;
  };

  var doSearch = function(array, condition) {
    if (!array.length) {
      return null;
    }
    var result = null;
    array.every(function(element) {
      if (condition(element)) {
        result = element;
        return false;
      };
      return true;
    });

    return result;
  };

  return {
    search: function(array, condition) {
      if (!areArgumentsValid(array, condition)) {
        return null;
      }
      return doSearch(array, condition);
    }
  };

})();

App.Tester = (function() {
  var array = [6, 10, 500, -100, 18];
  var condition = function(element) {
    return element > 10;
  };

  console.log(App.ArraySearcher.search(array, condition));
})();
