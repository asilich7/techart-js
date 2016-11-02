define(function() {
    'use strict';

    function getMessageWithSeverity() {
        var msgWithSeverity = '';
        if (this.severity == LogMessage.SEVERITY_INFO) {
            msgWithSeverity = 'INFO: ';
        } else if (this.severity == LogMessage.SEVERITY_WARN) {
            msgWithSeverity = 'WARNING: ';
        } else if (this.severity == LogMessage.SEVERITY_ERR) {
            msgWithSeverity = 'ERROR: ';
        }

        return msgWithSeverity + this.message;
    }

    function LogMessage(message, severity) {
        this.message = message;
        this.severity = severity;

        this.getMessageWithSeverity = getMessageWithSeverity;
    };

    LogMessage.SEVERITY_INFO = 0;
    LogMessage.SEVERITY_WARN = 1;
    LogMessage.SEVERITY_ERR = 2;

    return LogMessage;
});
