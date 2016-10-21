var App = {};

App.Filter = (function() {
	'use strict';
	
	var doFilter = function(array, callback) {
		console.log("Start filter function");
		console.log("Array: [" + array + "]");
		
		if(callback) {
			var filteredArray = [];
			for (var i = 0; i < array.length; i++) {
				if(callback(array[i])) {
					filteredArray.push(array[i]);
				}
			}
			console.log("Filtered array: [" + filteredArray + "]");
		}
		
		console.log("End filter function");
	}
	
	return {
		filter: doFilter
	}
	
})();

(function() {
	'use strict';
	var array = ["Alabama", "Arizona", "Arkansas", "California", "Colorado"];
	var callback = function(elemnt) {
		return elemnt.startsWith('A');
	}
	App.Filter.filter(array, callback);
})();