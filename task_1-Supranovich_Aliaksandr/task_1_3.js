var App = {};

App.ArrayFilter = (function() {
  'use strict';

  var areArgumentsValid = function(array, condition) {
    if (!array || !(array instanceof Array) || !(condition instanceof Function)) {
      console.log('Arguments are invalid');
      return false;
    }
    return true;
  };

  var doFilter = function(array, condition) {
    if (!array.length) {
      return;
    }
    var i = array.length;
    while (i--) {
      if (!condition(array[i])) {
        array.splice(i, 1);
      }
    }
  };

  return {
    filter: function(array, condition) {
      if (areArgumentsValid(array, condition)) {
        doFilter(array, condition);
      }
    }
  };
})();

App.Tester = (function() {
  var array = ['ab', 'ac', 'acb', 'op', 'adtt', 'aop'];
  var condition = function(element) {
    return element.startsWith('a');
  };

  App.ArrayFilter.filter(array, condition);
  console.log(array);
})();
