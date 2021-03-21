var express = require('express');
const log4js = require("log4js");

log4js.configure({
  appenders: { logs: { type: "file", filename: "logs/system-logs.log" } },
  categories: { default: { appenders: ["logs"], level: "error" } }
});

const logger = log4js.getLogger("logs");
const app = express();
logger.level = "debug";
//logger.level = "warn";

app.use(log4js.connectLogger(logger, { level: 'auto' }));

app.get('/', (req,res)=> {
  res.send('hello world');
});

    //logger.trace("Entering cheese testing");
    //logger.debug("Got cheese.");

logger.info("Cheese is Comté.");
// logger.info("Cheese is Comté.",{userID: "1010101010", request: {test_field: 101010, test_field2: "This is String"}});
logger.info("Added new monitor.",{userID: "1010101010", test_field: 101010, req_field:{test_field: 101010, test_field2: "This is String"}});
//logger.info({userID: "1010101010", test_field: 101010, test_field2: "This is String"});

// logger.warn("Cheese is quite smelly.");
// logger.warn({userID: "1010101010", test_field: 101010, test_field2: "This is String"});
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");

app.listen(5000);