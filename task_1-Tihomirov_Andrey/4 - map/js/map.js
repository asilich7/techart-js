var App = {};

App.Map = (function() {
	'use strict';
	
	var map = function(array, callback) {
		console.log("Map() function started");
		console.log("Array: [" + array + "]");
		
		var newArray = [];
		
		for (var i = 0; i < array.length; i++) {
			newArray.push(callback(array[i]));
		}
		
		console.log("New array: [" + newArray + "]");
	}
	
	return {
		map: map
	}	
})();

(function() {
	'use strict';

	var callback = function(number) {
		return Math.ceil(Math.random() * number);
	}

	var array = [6, 7, 9, 5];

	App.Map.map(array, callback);
})();