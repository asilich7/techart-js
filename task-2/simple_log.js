(function () {
  'use strict';

  function getEnvironment() {
    var context;

    if(typeof module !== 'undefined' && module.exports) {
      context = 'node';
    } else {
      context = 'browser';
    }

    var exports;

    switch(context) {
      case 'browser':
        window.simpleLog = { };
        exports = window.simpleLog;
        break;
      case 'node':
        exports = module.exports;
        break;
    }

    return {
      context: context,
      exports: exports
    };
  }

  var env = getEnvironment();

  /**
   * Pseudo-classical inheritance pattern
   */

  function extend(Child, Parent) {
    if(typeof Child !== 'function') {
      throw new Error('Illegal Child argument. Child argument must be a function');
    }
    if(typeof Parent !== 'function') {
      throw new Error('Illegal Parent argument. Parent argument must be a function');
    }

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }

  /**
   * IllegalArgumentException pseudo-class declaration
   */

  function IllegalArgumentException(eMessage) {
    this.name = "IllegalArgumentException";
    this.message = eMessage || null;
    this.stack = (new Error()).stack;
  }

  extend(IllegalArgumentException, Error);

  /**
   * Logger pseudo-class declaration
   */

  function Logger (level) {
    this._level = 'NONE';
    this._log = [];

    if(arguments.length) this.setLevel(level);
  }

  Logger.DEBUG = 'DEBUG';
  Logger.INFO  = 'INFO';
  Logger.WARN  = 'WARN';
  Logger.ERROR = 'ERROR';
  Logger.FATAL = 'FATAL';
  Logger.NONE  = 'NONE';

  Logger.create = function (level) {
    if(arguments.length) return new Logger(level);

    return new Logger();
  };

  Logger.prototype._isValidLevel = function (level) {
    var available = ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'NONE'];

    if(available.indexOf(level) !== -1) return true;
    return false;
  };

  Logger.prototype.setLevel = function (level) {
    if(this._isValidLevel(level)) {
      this._level = level;
    } else {
      throw new IllegalArgumentException('Illegal level argument');
    }
  };

  Logger.prototype.getLevel = function () {
    return this._level;
  };

  Logger.prototype._represent = function (data) {
    if(!arguments.length) {
      throw new IllegalArgumentException('Illegal data argument');
    }

    var space = '  ';
    return JSON.stringify(data, false, space);
  };

  Logger.prototype._getPrefix = function() {
    if(this._level === 'NONE') {
      return '';
    } else {
      return this._level + ':\n';
    }
  };

  Logger.prototype.log = function (data) {
    if(!arguments.length) {
      throw new IllegalArgumentException('Illegal data argument');
    }

    var prefix = this._getPrefix(),
        dataRepresentation = this._represent(data);

    this._log.push(prefix + dataRepresentation);
  };

  Logger.prototype.getLog = function () {
    return this._log;
  };

  Logger.prototype.clearLog = function () {
    this._log = [];
  };

  Logger.prototype.console = function () {
    var separator = '\n\n';
    var joined = this._log.join(separator);

    console.log(joined);
  };

  if(env.context == 'browser') {
    Logger.prototype.alert = function () {
      var separator = '\n\n';
      var joined = this._log.join(separator);

      alert(joined);
    };
  }

  /**
   * WebLogger pseudo-class declaration
   */

  function WebLogger (level, url) {
    if(arguments.length) {
      Logger.call(this, level);
    } else {
      Logger.call(this);
    }

    this._url = null;

    if(arguments.length === 2) this.setUrl(url);

    this._bindToUncaughtExceptionEvent();
  }

  extend(WebLogger, Logger);

  WebLogger.create = function (level, url) {
    switch (arguments.length) {
      case 0:
        return new WebLogger();
      case 1:
        return new WebLogger(level);
      default:
        return new WebLogger(level, url);
    }
  };

  WebLogger.prototype._bindToUncaughtExceptionEvent = function () {
    var handler = function(evt) {
      var info = 'Caught[via "error" event]: ' + evt.message +
                 ' from ' + evt.filename + ':' + evt.lineno;

      this.clearLog();
      this.log(info);
      this.post();
    }.bind(this);

    window.addEventListener('error', handler);
  };

  WebLogger.prototype._isValidUrl = function (url) {
    if(!arguments.length) {
      throw new IllegalArgumentException('Illegal url argument');
    }

    try {
      new URL(url);
      return true;
    }
    catch (invalidUrl) {
      return false;
    }
  };

  WebLogger.prototype.setUrl = function (url) {
    if(this._isValidUrl(url)) {
      this._url = url;
    } else {
      throw new IllegalArgumentException('Illegal url argument');
    }
  };

  WebLogger.prototype.getUrl = function () {
    return this._url;
  };

  WebLogger.prototype.post = function (success) {
    if(arguments.length) {
      if(typeof success !== 'function') {
        throw new IllegalArgumentException('Illegal success argument');
      }
    }
    if(!this._url) return;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if(success) success(xhr);
      }
    };

    xhr.open('POST', this._url, true);

    var separator = '\n\n';
    var joined = this._log.join(separator);

    xhr.send(joined);
  };

  /**
   * Event pseudo-class declaration
   */

  function Event (action) {
    this._listeners = [];
    this._action = null;

    if(arguments.length) this.setAction(action);
  }

  Event.create = function (action) {
    if(arguments.length) return new Event(action);

    return new Event();
  };

  Event.prototype._isValidAction = function (action) {
    if(typeof action === 'function') return true;
    return false;
  };

  Event.prototype.setAction = function (action) {
    if(this._isValidAction(action)) {
      this._action = action;
    } else {
      throw new IllegalArgumentException('Illegal action argument');
    }
  };

  Event.prototype.getAction = function () {
    return this._action;
  };

  Event.prototype._isValidListener = function (listener) {
    if(typeof listener === 'object' && typeof listener.log === 'function')
    {
      return true;
    }
    return false;
  };

  Event.prototype.addListener = function (listener) {
    if(this._isValidListener(listener)) {
      this._listeners.push(listener);
    } else {
      throw new IllegalArgumentException('Illegal listener argument');
    }
  };

  Event.prototype.getListeners = function () {
    return this._listeners;
  };

  Event.prototype.target = function() {
    if(!this._action) return;

    this._action.apply(null, arguments);

    var actionRepresentation = this._action.toString();
    this._listeners.forEach(function (listener) {
      var data = 'There is a called method: ' + actionRepresentation;
      listener.log(data);
    });
  };

  /**
   * Exports
   */

  env.exports.extend = extend;
  env.exports.Logger = Logger;
  if(env.context === 'browser') env.exports.WebLogger = WebLogger;
  env.exports.Event = Event;
}) ();
