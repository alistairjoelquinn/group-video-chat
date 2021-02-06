const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const csurf = require('csurf');
const cookieSession = require('cookie-session');
const cookieSessionMiddleware = cookieSession(require('./env/cookie-secrets'));

const routes = require('./routes');
const { developmentErrors, productionErrors } = require('./handlers/errorHandlers');

app.use(express.json());
app.use(compression());
app.use(cookieSessionMiddleware);
app.use(csurf());
app.use(function (req, res, next) {
    res.cookie('mytoken', req.csrfToken());
    next();
});
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use('/', routes);

if (app.get('env') === 'development') {
    app.use(developmentErrors);
} else {
    app.use(productionErrors);
}

module.exports = app;