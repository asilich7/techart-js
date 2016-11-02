define(["baseLogger", "extend"], function(baseLogger, extend) {
	
	function ConsoleLogger() {
		ConsoleLogger.superclass.constructor.call(this);
	};
	
	extend(ConsoleLogger, baseLogger);
	
	ConsoleLogger.prototype.log = function(message, logLevel) {
		ConsoleLogger.superclass.log.call(this, console.log, message, logLevel);
	};
	
	return ConsoleLogger;
	
});