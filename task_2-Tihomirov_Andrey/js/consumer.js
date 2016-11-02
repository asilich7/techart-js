define(["AlertLogger", "ConsoleLogger", "PageLogger", "Logger"], 
		function(AlertLogger, ConsoleLogger, PageLogger, Logger) {
	'use strict';	
		
		
	function publish() {
		var logger = new Logger();
	
		logger.info("info message", new AlertLogger());
		logger.warning("warning message", new AlertLogger());
		logger.error("error message", new AlertLogger());
		logger.debug("debug message", new AlertLogger());
	
		logger.info("info message", new ConsoleLogger());
		logger.warning("warning message", new ConsoleLogger());
		logger.error("error message", new ConsoleLogger());
		logger.debug("debug message", new ConsoleLogger());
	
		logger.info("info message", new PageLogger("demo"));
		logger.warning("warning message", new PageLogger("demo"));
		logger.error("error message", new PageLogger("demo"));
		logger.debug("debug message", new PageLogger("demo"));	
	};
	
	return publish;
		
	
});