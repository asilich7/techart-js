define(function() {
    'use strict';

    function Validator(logWriter) {
        this.validateString = function(str, mandatory, validationMsg) {
            if (!str || !(typeof str === 'string')) {
                if (mandatory) {
                    throw new Error(validationMsg);
                } else {
                    logWriter.warn(validationMsg);
                }
            }
        };

        this.validateNumber = function(num, mandatory, validationMsg) {
            if (!num || !(typeof num === 'number')) {
                if (mandatory) {
                    throw new Error(validationMsg);
                } else {
                    logWriter.warn(validationMsg);
                }
            }
        };
    };

    return Validator;
});
