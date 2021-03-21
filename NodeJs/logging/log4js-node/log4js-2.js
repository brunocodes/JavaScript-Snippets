const log4js = require('log4js');
log4js.configure('./log4js.json');

const appLogger = log4js.getLogger("app")
appLogger.level = "debug";

const errorLogger = log4js.getLogger("errors")
errorLogger.level = "error";

module.exports = { appLogger, errorLogger, log4js };
// express middleware
//app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));