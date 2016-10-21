var App = {};

App.ElementSearch = (function() {
	
	var doElementSearch = function(array, condition) {
		console.log("ElementSearch");
		var resultElem;
		for(var i = 0; i < array.length; i++) {
			if (condition(array[i])) {
				resultElem = array[i];
			};
		};
		console.log("Result Element: " + resultElem);
	};
	
	return {
		elementSearch: doElementSearch
	};
	
})();

(function() {
	var array = [9, 1, 2, 8, 7, 4, 5, 3, 0, 6, 15];
	App.ElementSearch.elementSearch(
		array, 
		(function(element) {return element == 6;})
	);
})();