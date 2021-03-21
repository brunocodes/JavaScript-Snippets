const express = require('express');
const log4js = require('log4js');
const app = express();

log4js.configure('./log4js.json');
const logger = log4js.getLogger("app")
logger.level = "debug";

// express middleware
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

app.get('/', (req,res)=> {
    res.send('hello world');
});

logger.info("Added new monitor.",{userID: "1010101010", test_field: 101010, req_field:{test_field: 101010, test_field2: "This is String"}});

app.listen(5000);