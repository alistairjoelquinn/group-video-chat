const mongoose = require('mongoose');
const Store = mongoose.model('Store');

module.exports.getUserData = async (req, res) => {
    console.log('route hit');
    const stores = await Store.find();
    console.log('stores: ', stores);
    res.json({
        message: 'Working correctly!'
    });
};