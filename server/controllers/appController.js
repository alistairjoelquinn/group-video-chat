const path = require('path');

module.exports.serveApplication = (req, res) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
    }
};



