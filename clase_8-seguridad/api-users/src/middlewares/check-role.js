import CustomError from "../utils/custom-error.js"

export const checkRole = (roles = []) => {
    return async (req, res, next) =>{
        try {
            if(!req.user) throw new CustomError('no autorizado', 401);
            if(!roles.includes(req.user.role)) throw new CustomError('No tiene permisos para acceder', 403);
            next();
        } catch (error) {
            next(error)
        }
    }
}