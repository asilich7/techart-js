define(["alertLogger", "consoleLogger", "pageLogger"], 
		function(alertLogger, consoleLogger, pageLogger) {
	
	function Logger() {};
	
	Logger.prototype = {
		constructor: Logger,

		info: function(message, loggerImpl) {
			loggerImpl.log(message, "INFO");
		},
		
		warning: function(message, loggerImpl) {
			loggerImpl.log(message, "WARNING");
		},
		
		error: function(message, loggerImpl) {
			loggerImpl.log(message, "ERROR");
		},
		
		debug: function(message, loggerImpl) {
			loggerImpl.log(message, "DEBUG");
		}

	}
	
	return Logger;
	
});