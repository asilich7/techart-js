var App = {};

App.ArrayMapper = (function() {
  'use strict';

  var areArgumentsValid = function(array, func) {
    if (!array || !(array instanceof Array) || !(func instanceof Function)) {
      console.log('Arguments are invalid');
      return false;
    }
    return true;
  };

  var doMap = function(array, func) {
    if (!array.length) {
      return;
    }
    var resultArray = [];
    var arrLength = array.length;
    for (var i = 0; i < arrLength; i++) {
      resultArray[i] = func(array[i]);
    }
    return resultArray;
  };

  return {
    map: function(array, condition) {
      if (areArgumentsValid(array, condition)) {
        return doMap(array, condition);
      }
    }
  };
})();

App.Tester = (function() {
  var array = ['ab', 'ac', 'acb', 'op', 'adtt', 'aop'];
  var someFunction = function(element) {
    return element.toUpperCase();
  };

  var mappedArray = App.ArrayMapper.map(array, someFunction);
  console.log(mappedArray);
})();
