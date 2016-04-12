var App = {};

App.ArraySorter = (function() {
  'use strict';
  // option controls where NaNs will be located in the result array
  var putNaNFirst = true;

  var isValid = function(array) {
    if (!array || !(array instanceof Array)) {
      console.log('Not an array.');
      return false;
    }
    return array.every(function(el) {
      if (typeof el != 'number' && !(el instanceof Number)) {
        console.log('Not a number ' + el);
        return false;
      }
      return true;
    });
  };

  var compareNumbers = function(a, b) {
    return isNaN(a) ? !putNaNFirst : (isNaN(b) ? putNaNFirst : a >= b);
  };

  var doQuickSort = function(array) {
    if (array.length < 2) {
      return array;
    }
    if (array.length == 2) {
      if (compareNumbers(array[0], array[1])) {
        return [array[1], array[0]];
      }
      return array;
    }
    var pivotIndex = Math.floor(array.length / 2);
    var pivot = array[pivotIndex];
    var left = [];
    var right = [];

    array.forEach(function(element, index) {
      if (index == pivotIndex) {
        return;
      }
      if (compareNumbers(element, pivot)) {
        right[right.length] = element;
      } else {
        left[left.length] = element;
      }
    });

    return doQuickSort(left).concat([pivot]).concat(doQuickSort(right));
  };

  return {
    sort: function(array) {
      return isValid(array) ? doQuickSort(array) : array;
    }
  };
})();

App.Tester = (function() {
  var array = [NaN, 100, .033, -300, new Number(Infinity), 999, 1, 10, -Infinity];
  var sortedArray = App.ArraySorter.sort(array);
  console.log(sortedArray);
})();
