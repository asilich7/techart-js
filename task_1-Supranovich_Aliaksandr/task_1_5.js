var App = {};

App.EvenAverager = (function() {
  'use strict';

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

  var isEven = function(a) {
    return isFinite(a) && a % 1 === 0 && a % 2 === 0;
  };

  var getAverageOfEven = function(array) {
    if (!array.length) {
      return 0;
    }

    var sum = 0;
    var count = 0;

    for (var i = 0; i < array.length; i++) {
      var number = array[i];
      if (isEven(number)) {
        sum += number;
        count++;
      }
    }

    return count > 0 ? sum / count : 0;
  };

  return {
    averageOfEven: function(array) {
      return isValid(array) ? getAverageOfEven(array) : 0;
    }
  };
})();

App.Tester = (function() {
  var array = [50, NaN, 1, .4, Infinity, new Number(300), -500, -Infinity];
  var averageOfEven = App.EvenAverager.averageOfEven(array);
  console.log(averageOfEven);
})();
