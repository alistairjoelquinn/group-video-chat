const mongoose = require('mongoose');
const Store = mongoose.model('Store');

module.exports.loadLoginPage = (req, res) => {
    console.log('Page loading');
};