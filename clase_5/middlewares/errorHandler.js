const messages = require('../errorMessages');

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const messageKey = err.messageKey || 'INTERNAL_SERVER_ERROR';

    res.status(statusCode).json({
        success: false,
        error: messages.errors[messageKey] || 'Ocurrio un error desconocido.',
    });
}

module.exports = errorHandler;