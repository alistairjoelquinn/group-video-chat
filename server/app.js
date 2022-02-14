const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    allowRequest: (req, callback) =>
        callback(null, req.headers.referer.startsWith("http://localhost:3000"))
});
const compression = require("compression");
const path = require("path");
const cookieSession = require('cookie-session');
const cookieSessionMiddleware = cookieSession({
    keys: [process.env.COOKIE_SECRET],
    maxAge: process.env.COOKIE_MAXAGE,
    sameSite: true,
});

const routes = require('./routes');
const { developmentErrors, productionErrors } = require('./handlers/errorHandlers');

app.use(express.json());
app.use(compression());
app.use(cookieSessionMiddleware);
io.use(function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use('/', routes);

if (app.get('env') === 'development') {
    app.use(developmentErrors);
} else {
    app.use(productionErrors);
}

module.exports = server;

require('./controllers/socketController')(io);
