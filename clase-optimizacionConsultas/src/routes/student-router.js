import { Router } from "express";
import { studentController } from "../controllers/student-controllers.js";

const router = Router();

router.get('/', studentController.getAll);
router.get('/:id', studentController.getById);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);
router.post('/:idStudent/course/:idCourse', studentController.addCourseToStudent);

export default router;