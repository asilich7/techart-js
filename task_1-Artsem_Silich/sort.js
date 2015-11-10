// Implement a function that sort array of numbers and return sorted array.

var QuickSort = (function() {
   return {
        sort : function sort(array) {
                if (array.length == 0)
                    return [];

                var leftSide = [];
                var rightSide = [];
                var pivotValue = array[0];

                for (var i = 1; i < array.length; i++) {
                    if (array[i] < pivotValue) {
                        leftSide.push(array[i]);
                    } else {
                        rightSide.push(array[i]);
                    }
                }

                return sort(leftSide).concat(pivotValue, sort(rightSide));
        }
    }
})();

(function() {
    var array = [10, 5, 23, 6, 8, 107, 1, 903, 8];
    console.log(array);

    var sortedArray = QuickSort.sort(array);
    console.log(sortedArray);
}) ();