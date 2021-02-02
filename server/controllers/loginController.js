const mongoose = require('mongoose');
const Store = mongoose.model('Store');

module.exports.getUserData = async (req, res) => {
    req.session.logger = 'loggy log';
    const userData = await Store.find();
    res.json({ userData });
};