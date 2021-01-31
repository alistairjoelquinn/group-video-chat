const mongoose = require('mongoose');
const Store = mongoose.model('Store');

module.exports.getUserData = async (req, res) => {
    const userData = await Store.find();
    res.json({ userData });
};