(function() {
  'use strict';

  function sort(array) {
    var sortedArray = array.slice();

    var swap = function (array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };

    (function quickSort(array, begin, end) {
      var i = begin,
          j = end,
          m = begin + ((end - begin) >> 1);

      do {
        while(array[i] <= array[m] && i < m) i++;
        while(array[j] >= array[m] && j > m) j--;

        if(i < j) {
          swap(array, i, j);

          if(m === i || m === j) {
            m = m === i ? j : i;
          }
        }
      } while(i < j);

      if(m - begin > 1) quickSort(array, begin, m - 1);
      if(end - m > 1) quickSort(array, m + 1, end);
    })(sortedArray, 0, sortedArray.length - 1);

    return sortedArray;
  }

  module.exports.sort = sort;
})();
