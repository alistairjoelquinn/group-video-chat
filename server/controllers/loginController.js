const mongoose = require('mongoose');
const Store = mongoose.model('Store');

module.exports.getUserData = (req, res) => {
    console.log('route hit');
    res.json({
        message: 'Working correctly!'
    });
};