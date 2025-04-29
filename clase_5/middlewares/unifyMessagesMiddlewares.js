const messages = require('../errorMessages')

const unifyMessagesMiddleware = (req,res,next) => {
    const originalJson = res.json;

    res.json = function (data) {
        if( data && data.success && messages.success[data.success]){
            data.message = messages.success[data.success];
        }
        return originalJson.call(this, data);
    };

    next();
}

module.exports = {
    unifyMessagesMiddleware
}