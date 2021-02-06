const { compare } = require('bcrypt');

module.exports.compare = (password, hash) => {
    return compare(password, hash)
        .then(isMatch => isMatch);
};