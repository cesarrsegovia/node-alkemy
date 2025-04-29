const AppError = require('../errors/AppError');

const getUser = (req, res, next) => {
    const user = null; //simular que no se encontro

    if(!user){
        return next(new AppError(404, 'USER_NOT_FOUND'));
    }

    res.status(200).json({
        success: 'USER_FOUND',
        data: user,
    });
};

module.exports = { getUser };