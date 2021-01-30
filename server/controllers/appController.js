const path = require('path');

module.exports.serveApplication = (req, res) => res.sendFile(path.join(__dirname, "..", "client", "index.html"));