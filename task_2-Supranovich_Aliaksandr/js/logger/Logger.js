define(['logger/LogWritersHolder',
        'logger/LogMessage',
        'validator/Validator'
    ],
    function(LogWritersHolder, LogMessage, Validator) {
        'use strict';

        function Logger(config) {

            LogWritersHolder.call(this, config);

            var validator = new Validator(this.getWriter());

            this.showInAlert = function(msg, severity) {
                validator.validateString(msg, true, Logger.EMPTY_MESSAGE_PARAM_ERROR);
                validator.validateNumber(severity, false, Logger.SEVERITY_NOT_SPECIFIED_WARN);
                this.getWriter(LogWritersHolder.ALERT_LOG_WRITER).write(new LogMessage(msg, severity));
            };
            this.showInConsole = function(msg, severity) {
                validator.validateString(msg, true, Logger.EMPTY_MESSAGE_PARAM_ERROR);
                validator.validateNumber(severity, false, Logger.SEVERITY_NOT_SPECIFIED_WARN);
                this.getWriter(LogWritersHolder.CONSOLE_LOG_WRITER).write(new LogMessage(msg, severity));
            };
            this.showOnPage = function(msg, severity) {
                validator.validateString(msg, true, Logger.EMPTY_MESSAGE_PARAM_ERROR);
                validator.validateNumber(severity, false, Logger.SEVERITY_NOT_SPECIFIED_WARN);
                this.getWriter(LogWritersHolder.PAGE_LOG_WRITER).write(new LogMessage(msg, severity));
            };
            this.sendToServer = function(msg, severity, url, method) {
                validator.validateString(msg, true, Logger.EMPTY_MESSAGE_PARAM_ERROR);
                validator.validateNumber(severity, false, Logger.SEVERITY_NOT_SPECIFIED_WARN);
                this.getWriter(LogWritersHolder.REST_LOG_WRITER).write(new LogMessage(msg, severity), url, method);
            };

            this.info = function(msg, writerIndicator) {
                validator.validateString(msg, true, Logger.EMPTY_MESSAGE_PARAM_ERROR);
                validator.validateNumber(writerIndicator, false, Logger.LOG_WRITER_NOT_SPECIFIED_WARN);
                this.getWriter(writerIndicator).write(new LogMessage(msg, LogMessage.SEVERITY_INFO));
            };
            this.warn = function(msg, writerIndicator) {
                validator.validateString(msg, true, Logger.EMPTY_MESSAGE_PARAM_ERROR);
                validator.validateNumber(writerIndicator, false, Logger.LOG_WRITER_NOT_SPECIFIED_WARN);
                this.getWriter(writerIndicator).write(new LogMessage(msg, LogMessage.SEVERITY_WARN));
            };
            this.err = function(msg, writerIndicator) {
                validator.validateString(msg, true, Logger.EMPTY_MESSAGE_PARAM_ERROR);
                validator.validateNumber(writerIndicator, false, Logger.LOG_WRITER_NOT_SPECIFIED_WARN);
                this.getWriter(writerIndicator).write(new LogMessage(msg, LogMessage.SEVERITY_ERR));
            };

            var logger = this;
            window.onerror = function(errorMsg, url, lineNumber, column, errorObj) {
                logger.err(errorMsg, logger.getDefaultWriterIndicator());
            };
        };

        Logger.EMPTY_MESSAGE_PARAM_ERROR = 'String parameter "message" is mandatory!';
        Logger.SEVERITY_NOT_SPECIFIED_WARN = '"severity" parameter is not specified, no message prefix will be shown.';
        Logger.LOG_WRITER_NOT_SPECIFIED_WARN = '"writerIndicator" parameter is not specified, default log writer will be used.';

        return Logger;
    });
