var App = {};

App.TriangularNumbers = (function() {
	'use strict';
	
	var triangularNumbers = function() {
		console.log("triangularNumbers() function called");
		var currentNummer = 0;
		for(var i = 0;; i++) {
			currentNummer = currentNummer + (i + 1)
			var divisorsCount = searchDivisorsCount(currentNummer);
			if(divisorsCount > 5) {
				console.log(currentNummer + ": " + divisorsCount);
				break;
			}
		}
	}
	
	var searchDivisorsCount = function(number) {
		var divisorsCount = 0;
		var residue;
		for(var i = 1; i <= number; i++) {
			if ((number % i) == 0) {
				divisorsCount++;
			}
		}
		return divisorsCount;
	}

	return {
		triangularNumbers: triangularNumbers
	}	
	
})();

(function() {
	'use strict';
	App.TriangularNumbers.triangularNumbers();
})();


