const log4js = require("log4js");
log4js.configure({
  appenders: { logs: { type: "file", filename: "logs/system-logs.log" } },
  categories: { default: { appenders: ["logs"], level: "error" } }
});

const logger = log4js.getLogger("logs");
logger.level = "debug";

module.exports = {
  logger,
  log4js
};

//####################################
const { logger, log4js } = require('./logger2');

app.use(log4js.connectLogger(logger, { level: 'auto' }));

logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

//#######################################

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
      format: winston.format.simple(),
  }));
}

//
// Logging
//
logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});

logger.info('Hello again distributed logs');