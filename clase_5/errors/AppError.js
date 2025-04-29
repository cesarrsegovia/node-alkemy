class AppError extends Error {
    constructor(statusCode, messageKey) {
        super();
        this.statusCode = statusCode;
        this.messageKey = messageKey;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;