define(['logger/logWriters/BaseLogWriter', 'validator/Validator'], function(BaseLogWriter, Validator) {
    'use strict';

    function RestLogWriter(config, errorLogWriter) {
        BaseLogWriter.call(this);

        if(!config) {
          config = {};
        }
        this.config = config;

        this.write = function(msg, url, method) {
            if(!url) {
              url = this.config.url;
            }
            if(!method) {
              method = this.config.method;
            }

            var validator = new Validator(errorLogWriter);
            validator.validateString(url, true, 'String parameter "url" is mandatory!');
            validator.validateString(method, true, 'String parameter "method" is mandatory!');

            var rqst = new XMLHttpRequest();
            rqst.open(method, url, true);
            rqst.setRequestHeader('Content-type', 'application/json');
            rqst.send(JSON.stringify(msg));
        };
    };
    return RestLogWriter;
});
