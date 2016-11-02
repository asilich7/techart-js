(function(){
  'use strict';

  function averageOfEven(array) {
    var total = 0, count = 0;

    array.forEach(function(element) {
      if(element % 2 === 0) {
        total += element;
        count += 1;
      }
    });
    return total / count;
  }

  module.exports.averageOfEven = averageOfEven;
})();
