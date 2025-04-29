import { db } from '../config/db-connection.js';
import models from '../models/associations.js';

const { StudentModel, CourseModel } = models;

const seeder = async() => {
    try {
        await db.sync({force: true});

        const student1 = await StudentModel.create({firstName: 'Cesar', lastName: 'Segovia', studentId: 1});
        const student2 = await StudentModel.create({firstName: 'Antonela', lastName: 'Heredia', studentId: 2});

        const course1 = await CourseModel.create({title: 'JavaScript', description: 'Curso de JS inicial'});
        const course2 = await CourseModel.create({title: 'TypeScript', description: 'Curso de TS avanzado'});

        await student1.addCoursesOfStudent([course1, course2]);
        await student2.addCoursesOfStudent([course1]);
    } catch (error) {
        console.log(error);
    } finally{
        await db.close()
        console.log("operacion finalizada");
        
    }
}

seeder();

// const test = async() => {
//     const course = await CourseModel.findOne({
//         where: {id: 1},
//         include: [
//             {
//                 model: StudentModel,
//                 as: 'students',
//             },
//         ],
//     });
//     console.log(JSON.stringify(course));
    
// };

// test();