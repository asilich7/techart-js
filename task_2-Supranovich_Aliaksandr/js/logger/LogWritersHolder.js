define(['logger/logWriters/AlertLogWriter',
    'logger/logWriters/ConsoleLogWriter',
    'logger/logWriters/PageLogWriter',
    'logger/logWriters/RestLogWriter'
], function(AlertLogWriter, ConsoleLogWriter, PageLogWriter, RestLogWriter) {
    'use strict';

    function LogWritersHolder(config) {

        if (!config) {
            config = {};
        }

        this.config = config;

        var consoleLogWriter = new ConsoleLogWriter(),
            alertLogWriter = new AlertLogWriter(),
            pageLogWriter = new PageLogWriter({
                logDivClass: this.config.logDivClass,
                infoClass: this.config.infoClass,
                warnClass: this.config.warnClass,
                errClass: this.config.errClass
            }, consoleLogWriter),
            restLogWriter = new RestLogWriter({
                url: this.config.url,
                method: this.config.method
            });

        this.getWriter = function(writerIndicator) {
            if (!writerIndicator) {
                writerIndicator = this.getDefaultWriterIndicator();
            }

            if (LogWritersHolder.CONSOLE_LOG_WRITER == writerIndicator) {
                return consoleLogWriter;
            } else if (LogWritersHolder.ALERT_LOG_WRITER == writerIndicator) {
                return alertLogWriter;
            } else if (LogWritersHolder.PAGE_LOG_WRITER == writerIndicator) {
                return pageLogWriter;
            } else if (LogWritersHolder.REST_LOG_WRITER == writerIndicator) {
                return restLogWriter;
            }

            return consoleLogWriter;
        };

        this.getDefaultWriterIndicator = function() {
          return this.config.defaultLogWriter;
        };

    }

    LogWritersHolder.CONSOLE_LOG_WRITER = 1;
    LogWritersHolder.ALERT_LOG_WRITER = 2;
    LogWritersHolder.PAGE_LOG_WRITER = 3;
    LogWritersHolder.REST_LOG_WRITER = 4;

    return LogWritersHolder;
});
