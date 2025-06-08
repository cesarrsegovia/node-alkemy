import CustomError from "../utils/custom-error.js";

export const checkRole = (roles = []) => {
    return async (req, res, next) => {
        try {
            if(!req.user) throw new CustomError('User not authenticated', 401);
            if(!roles.includes(req.user.role)) {
                throw new CustomError('no tiene permisos para acceder a este recurso', 403);
            }
            next();
        } catch (error) {
            next(error);
            
        }
    }
}