module("Logger", {
    setup: function () {
        this.calls = [];

        this.logFunc = function (messages) {
            this.calls.push(messages);
        };

        this.cLogger = window.Logger.get('console');

        this.cLogger.setCustomHandler(this.logFunc.bind(this));
        this.cLogger.setMessageFormatHandler(function(level, message) {return message;});
    }
});

test("Log messages routed to custom handler", function () {
    var logger = this.cLogger;

    // Route some messages through to the logFunc.
    logger.debug("A debug message");
    logger.info("An info message");
    logger.warn("A warning message");
    logger.error("An error message");

    equal(this.calls[0], "A debug message");
    equal(this.calls[1], "An info message");
    equal(this.calls[2], "A warning message");
    equal(this.calls[3], "An error message");
});

test("Test Logger.isLevelDisabled Logger.enableAll Logger.getDisabledLevels", function () {
    var logger = this.cLogger;

    logger.disableLevel('debug');
    equal(logger.isLevelDisabled('debug'), true);

    logger.disableLevel('warn');
    equal(logger.isLevelDisabled('warn'), true);

    logger.disableLevel('info');
    equal(logger.isLevelDisabled('info'), true);

    logger.disableLevel('error');
    equal(logger.isLevelDisabled('error'), true);

    equal(logger.getDisabledLevels().length, 4);

    logger.enableAllLevels();
    equal(logger.isLevelDisabled('debug'), false);
    equal(logger.isLevelDisabled('warn'), false);
    equal(logger.isLevelDisabled('info'), false);
    equal(logger.isLevelDisabled('error'), false);
});

test("Test Logger.restoreDefaults", function () {
    var logger = this.cLogger;

    logger.disableLevel('debug');
    equal(logger.isLevelDisabled('debug'), true);

    logger.disableLevel('warn');
    equal(logger.isLevelDisabled('warn'), true);

    equal(logger.getDisabledLevels().length, 2);

    logger.restoreDefaults();

    equal(logger.getDisabledLevels().length, 0);
    logger.debug("debug message");
});

