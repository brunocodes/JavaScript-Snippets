const express = require('express');
const app = express();
const { appLogger, errorLogger, log4js } = require('./log4js-2');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

app.get('/', (req,res)=> {
    res.send('hello world');
});

appLogger.info("Added new monitor.",{userID: "1010101010", test_field: 101010, req_field:{test_field: 101010, test_field2: "This is String"}});
errorLogger.error("Error added new monitor.",{userID: "1010101010", test_field: 101010, req_field:{test_field: 101010, test_field2: "This is String"}, error_trace:{test_field: 101010, test_field2: "This is String"}});

app.listen(5000);