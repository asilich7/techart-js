define(["baseLogger", "extend"], function(baseLogger, extend) {
	
	function PageLogger(elemId) {
		PageLogger.superclass.constructor.call(this);
		this.elemId = elemId;
	}
	
	extend(PageLogger, baseLogger);
	
	PageLogger.prototype.log = function(message, logLevel) {
		var content = document.getElementById(this.elemId).innerHTML;
		document.getElementById(this.elemId).innerHTML = content + "</br>"
			+ "---LOGGING---</br>"
			+ logLevel + ": " + message + "</br>"
			+ "---END---</br>";		
	}
	
	return PageLogger;
	
});