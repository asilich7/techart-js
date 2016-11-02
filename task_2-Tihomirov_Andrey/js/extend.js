define(function() {
	'use strict';
	
	function extend(ConcreteLogger, BaseLogger) {
		var F = function() {};
		F.prototype = BaseLogger.prototype;
		
		ConcreteLogger.prototype = new F();
		ConcreteLogger.prototype.constructor = ConcreteLogger;
		ConcreteLogger.superclass = BaseLogger.prototype;
	}
	
	return extend;
});