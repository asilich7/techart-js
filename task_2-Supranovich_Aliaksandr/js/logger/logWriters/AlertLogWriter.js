define(['logger/logWriters/BaseLogWriter'], function(LogWriter) {
    'use strict';

    function AlertLogWriter() {
        LogWriter.call(this);
        this.write = function(msg) {
            alert(msg.getMessageWithSeverity());
        };
    };
    return AlertLogWriter;
});
