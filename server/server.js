const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

const routes = require('./routes');
const { developmentErrors } = require('./handlers/errorHandlers');

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use('/', routes);

app.use(developmentErrors);

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "client", "index.html")));

module.exports = app;