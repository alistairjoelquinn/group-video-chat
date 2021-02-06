const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const path = require('path');
const { hash, compare } = require('../utils/auth');

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

module.exports.authenticateUser = async (req, res) => {
    console.log('req.body: ', req.body);
};

module.exports.getUserData = async (req, res) => {
    const userData = await Store.find();
    res.json({ userData });
};
