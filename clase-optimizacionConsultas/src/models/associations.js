//N:N relacion de muchos a muchos

import { CourseModel } from "./course-model.js";
import { StudentModel } from "./student-model.js";

StudentModel.belongsToMany(CourseModel, { //belongtomany == muchos a muchos
    through: 'StudentCourses',
    as: 'coursesOfStudent',
    foreignKey: 'studentId', // en la tabla StudentCourses el studentID representa al estudiante
})

CourseModel.belongsToMany(StudentModel, {
    through: 'StudentCourses',
    as: 'students',
    foreignKey: 'courseId',
})

export default {
    StudentModel,
    CourseModel
}

