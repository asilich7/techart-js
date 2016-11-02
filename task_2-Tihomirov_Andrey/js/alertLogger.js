define(["baseLogger", "extend"], function(baseLogger, extend) {
	
	function AlertLogger() {
		AlertLogger.superclass.constructor.call(this);
	}
	
	extend(AlertLogger, baseLogger);
	
	AlertLogger.prototype.log = function(message, logLevel) {
		AlertLogger.superclass.log.call(this, alert, message, logLevel);
	}
	
	return AlertLogger;
	
});