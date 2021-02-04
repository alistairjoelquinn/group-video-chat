const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const path = require('path');
const { hash, compare } = require('./auth');

module.exports.login = (req, res) => {
    if (req.session.userId) {
        res.redirect('/');
    } else {
        res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
    }
};

module.exports.logout = (req, res) => {
    req.session = null;
    res.redirect('/');
};

module.exports.authenticateUser = async () => {
    console.log('loggy login');
}

module.exports.getUserData = async (req, res) => {
    req.session.logger = 'loggy log';
    const userData = await Store.find();
    res.json({ userData });
};
