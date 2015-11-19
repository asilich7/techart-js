(function () {
    "use strict";
    // Logger constructor
    var Logger = function(mode) {
        this._logHandler = noop;
        this._messageFormatHandler = defaultFormatMessageHandler;
        this._mode = mode;
        this._disabledLevels = [];
    };

    var noop = function(){};

    var defaultFormatMessageHandler = function(level, message) {
        return "[" + level.name + "] " + "[" + new Date().toISOString() + "] " + message + '\n';
    };

    var defineLevel = function(value, name) {
        return {
            value: value,
            name: name
        };
    };

    // Inheritance function
    var extend = function(child, parent) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = parent;
    };

    // Predefined logging levels
    Logger.DEBUG = defineLevel(1, 'DEBUG');
    Logger.INFO = defineLevel(2, 'INFO');
    Logger.WARN = defineLevel(3, 'WARN');
    Logger.ERROR = defineLevel(4, 'ERROR');

    var defineMode = function(name, callback) {
        return {
            name : name,
            callback : callback
        }
    };

    // Predefined logging modes
    Logger.CONSOLE = defineMode('CONSOLE', function(message) {
        console.log(message);
    });
    Logger.WINDOW = defineMode('WINDOW', function(message) {
        document.write(message);
    });
    Logger.ALERT = defineMode('ALERT', function(message) {
        alert(message);
    });
    Logger.ENDPOINT = defineMode('ENDPOINT', function(url, message) {
        var xhr;
        try {
            xhr = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (E) {
                xhr = false;
            }
        }
        if (!xhr && typeof XMLHttpRequest!='undefined') {
            xhr = new XMLHttpRequest();
        }
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if(xhr.status == 200) {
                    alert(xhr.responseText);
                } else {
                    console.log(xhr.statusText);
                }
            }
        };
        xhr.send(message);
    });

    // Custom handler possibility
    Logger.prototype.setCustomHandler = function(func) {
        this._logHandler = func;
    };

    // Debug logging level
    Logger.prototype.debug = function() {
        this.invoke(Logger.DEBUG, arguments[0]);
    };

    // Info logging level
    Logger.prototype.info = function() {
        this.invoke(Logger.INFO, arguments[0]);
    };

    // Warn logging level
    Logger.prototype.warn = function() {
        this.invoke(Logger.WARN, arguments[0]);
    };

    // Error logging level
    Logger.prototype.error = function() {
        this.invoke(Logger.ERROR, arguments[0]);
    };

    Logger.prototype.invoke = function (level, msgArgs) {
        if (this._logHandler && !this.isLevelDisabled(level.name)) {
            var message = this._messageFormatHandler(level, msgArgs);
            this._logHandler(message);
        }
    };

    // Set custom message handler
    Logger.prototype.setMessageFormatHandler = function (callback) {
        this._messageFormatHandler = callback;
    };

    // Get current Logger mode
    Logger.prototype.getMode = function() {
        return this._mode;
    };

    // Get current disabled Logger levels
    Logger.prototype.getDisabledLevels = function() {
        return this._disabledLevels;
    };

    // Disable logging level
    Logger.prototype.disableLevel = function(level) {
        this._disabledLevels.push(level);
    };

    // Enable all disabled logging levels
    Logger.prototype.enableAllLevels = function() {
        console.log('All levels has been enabled.')
        this._disabledLevels = [];
    };

    // Check weither given level is disabled
    Logger.prototype.isLevelDisabled = function(level) {
        var upper = level.toUpperCase();
        for(var i = 0; i < this._disabledLevels.length; i++) {
            if(this._disabledLevels[i].toUpperCase() === upper) {
                console.log(level + ' level has been disabled.')
                return true;
            }
        }
        return false;
    };
    // Restore default logger behaviour
    Logger.prototype.restoreDefaults = function() {
        this._disabledLevels = [];
        this._messageFormatHandler = defaultFormatMessageHandler;
        this._logHandler = Logger[this._mode.toUpperCase()].callback;
    }
    // Console method implementation
    var ConsoleLogger = function() {
        Logger.apply(this, [arguments[0]]);
        this._logHandler = Logger[this._mode.toUpperCase()].callback;
    };
    extend(ConsoleLogger, Logger);

    // Window method implementation
    var WindowLogger = function() {
        Logger.apply(this, [arguments[0]]);

        this._logHandler = Logger[this._mode.toUpperCase()].callback;
    };
    extend(WindowLogger, Logger);

    // Alert method implementation
    var AlertLogger = function() {
        Logger.apply(this, [arguments[0]]);
        this._logHandler = Logger[this._mode.toUpperCase()].callback
    };
    extend(AlertLogger, Logger);

    // Endpoint method implementation
    var EndpointLogger = function() {
        Logger.apply(this, [arguments[0]]);
        this._logHandler = Logger[this._mode.toUpperCase()].callback.bind(this, arguments[1]);
    };
   extend(EndpointLogger, Logger);

    // Logger factory method, used for retrieving logger object based on the given mode
   Logger.get = function(mode, url) {
        var logger;

        if(arguments.length == 0 || arguments.length > 2) {
            console.log("Invalid numbers of arguments");
            return;
        }
       var modeUpper = mode.toUpperCase();

       if (modeUpper === Logger.CONSOLE.name) {
           logger = new ConsoleLogger(modeUpper);
       } else if (modeUpper === Logger.WINDOW.name) {
           logger = new WindowLogger(modeUpper);
       } else if (modeUpper === Logger.ALERT.name) {
           logger = new AlertLogger(modeUpper);
       } else if (modeUpper === Logger.ENDPOINT.name) {
           if (url == "undefined")
               console.log("In case of endpoint mode please provide second [url] parameter.");
           logger = new EndpointLogger(modeUpper, url);
       } else {
           console.log(mode + " is not supported. Use one of those modes ['console', 'window', 'alert', 'endpoint']");
       }
        return logger;
    };

    // Export to environments boilerplate
    if (typeof define === 'function' && define.amd) {
        define(Logger);
    }
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Logger;
    }
    else {
        window['Logger'] = Logger;
    };
})();






