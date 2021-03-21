const express = require('express');
const app = express();
const { appLogger, errorLogger, log4js } = require('./log4js-2');

//app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));

// app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto",
//     // include the Express request ID in the logs
//     format: (req, res, format) => format(`:remote-addr - ${req.user} - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent"`)
// }));
app.use(express.json());
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto",
    format: (req, res, format) => format(`:remote-addr - ${req.user} - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent" ${JSON.stringify(req.body)}`)
}));

app.get('/', (req,res)=> {
    res.send('hello world');
});
app.post('/addlog', (req,res)=> {
    const logName = req.body.name;
    res.send('Posted things ' + logName);
});

appLogger.debug("Ping monitor.",{userID: "6969101010", test_field: 101010, req_field:{test_field: 101010, test_field2: "This is String"}});
appLogger.info("Added new monitor.",{userID: "4200101010", test_field: 101010, req_field:{test_field: 101010, test_field2: "This is String"}});
errorLogger.error("Error added new monitor.",{userID: "6660101010", test_field: 101010, req_field:{test_field: 101010, test_field2: "This is String"}, error_trace:{test_field: 101010, test_field2: "This is String"}});

app.listen(5000);