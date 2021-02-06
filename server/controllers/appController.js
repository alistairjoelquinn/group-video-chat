const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const path = require('path');

module.exports.serveApplication = (req, res) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
    }
};

module.exports.getUserData = async (req, res) => {
    const { name, imageUrl, _id } = await Store.findOne({ _id: req.session.userId });
    res.json({ name, imageUrl, _id });
};
