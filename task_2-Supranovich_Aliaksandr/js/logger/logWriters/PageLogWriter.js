define(['logger/logWriters/BaseLogWriter', 'logger/LogMessage'], function(BaseLogWriter, LogMessage) {
    'use strict';

    function PageLogWriter(config) {
        BaseLogWriter.call(this);
        if (!config) {
            config = {};
        }
        this.config = config;

        this.write = function(msg) {
            if (PageLogWriter.logDiv == null) {
                createLogDiv();
            }
            var logNode = document.createElement("LI"),
                logTextNode = document.createTextNode(msg.getMessageWithSeverity());

            setLogMessageClass(logNode, msg.severity);
            logNode.appendChild(logTextNode);
            PageLogWriter.logDiv.appendChild(logNode);
        };

        function createLogDiv() {
            var logDiv = document.createElement('div');
            if (!config.logDivClass) {
                logDiv.style.position = 'absolute';
                logDiv.style.border = '1px silver solid';
                logDiv.style.top = 30;
                logDiv.style.left = 30;
            } else {
                logDiv.className = config.logDivClass;
            }
            document.body.appendChild(logDiv);
            PageLogWriter.logDiv = logDiv;
        };

        function setLogMessageClass(logNode, severity) {
            if (!config) {
                return;
            }
            var logMsgClass = null;
            if (severity == LogMessage.SEVERITY_INFO) {
                logMsgClass = config.infoClass;
            } else if (severity == LogMessage.SEVERITY_WARN) {
                logMsgClass = config.warnClass;
            } else if (severity == LogMessage.SEVERITY_ERR) {
                logMsgClass = config.errClass;
            }

            if (!!logMsgClass) {
                logNode.className = logMsgClass;
            }
        };

    };
    return PageLogWriter;
});
