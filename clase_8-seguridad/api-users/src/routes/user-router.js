import { Router } from "express";
import { userController } from "../controllers/user-controller.js";
import { checkAuthTokenCookies } from "../middlewares/check-auth.js";
import { checkRole } from "../middlewares/check-role.js";

const router = Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile-user', checkAuthTokenCookies, checkRole([ROLES.USUARIO]), userController.getInfoUser);
router.get('/profile-admin', checkAuthTokenCookies, checkRole([ROLES.ADMIN]), userController.getInfoUser)
router.get('/test',
    checkAuthTokenCookies,
    checkRole([ROLES.ADMIN, ROLES.USUARIO, ROLES.INVITADO]),
    (req, res) => res.send('ok')
)

export default router;