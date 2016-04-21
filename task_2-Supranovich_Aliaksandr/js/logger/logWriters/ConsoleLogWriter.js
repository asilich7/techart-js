define(['logger/logWriters/BaseLogWriter'], function(BaseLogWriter) {
    'use strict';

    function ConsoleLogWriter() {
        BaseLogWriter.call(this);
        this.write = function(msg) {
            console.log(msg.getMessageWithSeverity());
        };
    };
    return ConsoleLogWriter;
});
