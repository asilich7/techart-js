define(function() {
	'use strict';
	
	function BaseLogger() {};
	
	BaseLogger.prototype = {
		constructor: BaseLogger,
		
		log: function(func, message, logLevel) {
			switch(logLevel) {
				case "INFO":
					func(logLevel + ": " + message);
					break;
				case "WARNING":
					func(logLevel + ": " + message);
					break;
				case "ERROR":
					func(logLevel + ": " + message);
					break;
				case "DEBUG":
					func(logLevel + ": " + message);
					break;
				default:
					console.log("wrong logLevel");
			}
		}
	}
	
	return BaseLogger;
	
});