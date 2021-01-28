const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("*", (req, res) => {
    console.log('Loggy Loggy');
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

module.exports = app;