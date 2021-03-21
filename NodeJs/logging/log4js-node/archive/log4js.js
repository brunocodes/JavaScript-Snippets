const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = "debug";
logger.debug("Some debug messages");

//#################################################//
const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});  

const logger = log4js.getLogger("cheese");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

//#################################################//
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.info("Cheese is Comté.");

//#################################################//

const log4js = require('log4js');
log4js.configure('./log4js.json');
// express middleware
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));