const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const { hash, compare } = require('./auth');

module.exports.login = async () => {
    console.log('loggy login');
};

module.exports.getUserData = async (req, res) => {
    req.session.logger = 'loggy log';
    const userData = await Store.find();
    res.json({ userData });
};