const mongoose = require('mongoose');
const Store = mongoose.model('Store');

module.exports.getUserData = (req, res) => {
    console.log('Getting user data');
};