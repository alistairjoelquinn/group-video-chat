const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const path = require('path');
const { compare } = require('../utils/auth');

module.exports.login = (req, res) => {
    if (req.session.userId) {
        res.redirect('/');
    } else {
        res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
    }
};

module.exports.logout = (req, res) => {
    req.session = null;
    res.json({ loggedOut: true });
};

module.exports.authenticateUser = async (req, res) => {
    const { username, password } = req.body;
    const store = await Store.findOne({ username: username });
    if (!store) {
        res.json({ error: 'Oops, you made a mistake!' });
    } else {
        const identified = await compare(password, store.hashedPassword);
        if (identified) {
            req.session.userId = store._id;
            res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
        } else {
            res.json({ error: 'Oops, you made a mistake!' });
        }
    }
};
