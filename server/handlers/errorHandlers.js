module.exports.catchErrors = (fn) => {
    console.log('fn: ', fn);
    return function (req, res, next) {
        console.log('fn2: ', fn);
        return fn(req, res, next).catch(next);
    };
};

module.exports.developmentErrors = (err, req, res, next) => {
    console.log('err: ', err);
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status
    };
    console.log('errorDetails: ', errorDetails);
    next();
};
