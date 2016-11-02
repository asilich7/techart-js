var App = {};

App.Map = (function() {
	'use strict';
	
	var calculateAverageOfEven = function(array) {
		console.log("calculateAverageOfEven() function started");
		
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		
		console.log("Average Of Even in array: [" + array + "] is [" + sum / array.length + "]");
	}
	
	return {
		average: calculateAverageOfEven
	}	
})();

(function() {
	'use strict';
	var array = [6, 7, 9, 5];
	App.Map.average(array);
})();