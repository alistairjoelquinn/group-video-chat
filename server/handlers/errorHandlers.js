module.exports.catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

module.exports.developmentErrors = (err, req, res, next) => {
    console.error('err: ', err);
    res.json({
        message: err.message,
        status: err.status
    });
};

exports.productionErrors = (err, req, res, next) => {
    console.error('err: ', err);
    res.json({ prodError: err.status || 500 });
};