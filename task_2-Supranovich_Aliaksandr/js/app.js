require(['logger/Logger'], function(Logger, LogWriter) {
    'use strict';
    var loggerConfig = {
        defaultLogWriter: 1,
        url: 'http://localhost:8080/log',
        method: 'POST',
        logDivClass: 'html-log-div',
        infoClass: 'info-log-msg',
        warnClass: 'warn-log-msg',
        errClass: 'err-log-msg'
    };

    var logger = new Logger(loggerConfig);

    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        (function(writerIdicator) {
            input.onchange = function() {
                logger.info('Field value was changed to "' + this.value + '"', writerIdicator);
            };
        })(i + 1);
    }

    document.getElementsByTagName('select')[0].onchange = function() {
        logger.warn('Select value was changed to "' + this.value + '"', 4);
    };

    document.getElementsByTagName('button')[0].onclick = function() {
        logger.err('Cancel button was pressed!', 1);
    };

    document.getElementsByTagName('button')[1].onclick = function() {
        throw new Error('Save button was pressed!');
    };

});
