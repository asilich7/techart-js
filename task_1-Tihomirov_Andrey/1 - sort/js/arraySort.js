var App = {};

App.Sort = (function() {
	'use strict';
	
	var doBubbleSort = function(array) {
		console.log("BubbleSort");
		console.log("\tarray before sort: " + array);
		var done = false;
		while (!done) {
			done = true;
			for (var i = 1; i < array.length; i++) {
				if (array[i-1] > array[i]) {
					done = false;
					App.SortUtil.swap(array, i - 1, i);
				}
			}
		}
		console.log("\tarray after sort: " + array);
	}

	var doCocktailSort = function(array) {
		console.log("CocktailSort");
		console.log("\tarray before sort: " + array);
		var isSorted = true;
		while (isSorted) {
			for (var i = 0; i < array.length - 1; i++) {
				if (array[i] > array[i + 1]) {
					App.SortUtil.swap(array, i, i + 1);
					isSorted = true;
				}
			}
 
			if (!isSorted) {
				break;
			}
			isSorted = false;
 
			for (var j = array.length - 1; j > 0; j--) {
				if (array[j - 1] > array[j]) {
					App.SortUtil.swap(array, j - 1, j);
					isSorted = true;
				}
			}
		}
		console.log("\tarray after sort: " + array);
	}

	var doSelectionSort = function(array) {
		console.log("SelectionSort");
		console.log("\tarray before sort: " + array);
		for(var i = 0; i < array.length; i++) {
			var indexOfMinElem = i;
			for(var j = i + 1; j < array.length; j++) {
				if(array[j] < array[indexOfMinElem]) {
					indexOfMinElem = j;
				}
			}
			if(indexOfMinElem != i) {
				App.SortUtil.swap(array, i, indexOfMinElem);
			}
		}
		console.log("\tarray after sort: " + array);
	}

	var doInsertionSort = function(array) {
		console.log("InsertionSort");
		console.log("\tarray before sort: " + array);
		for (var i = 0; i < array.length; i++) {
			var elem = array[i];
			for (var j = i; j > 0 && elem < array[j - 1]; j--) {
				array[j] = array[j - 1];
			}
			array[j] = elem;
		}
		console.log("\tarray after sort: " + array);
	}

	return {
        bubbleSort: doBubbleSort,
        cocktailSort: doCocktailSort,
		selectionSort: doSelectionSort,
		insertionSort: doInsertionSort
    };

})();

App.SortUtil = (function() {
	'use strict';
	var doSwap = function(array, index0, index1) {
		[array[index0], array[index1]] = [array[index1], array[index0]];
	}

	return {
		swap: doSwap
	};

})();

(function() {
	App.Sort.bubbleSort([9, 1, 2, 8, 7, 4, 5, 6, 0, 3]);
	App.Sort.cocktailSort([9, 1, 2, 8, 7, 4, 5, 3, 0, 6]);
	App.Sort.selectionSort([3, 1, 2, 8, 7, 4, 5, 9, 0, 6]);
	App.Sort.insertionSort([3, 0, 2, 8, 7, 4, 5, 9, 1, 6]);
})();