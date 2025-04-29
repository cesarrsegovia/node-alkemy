import models from '../../models/associations.js';
import MySqlRepository from './mysql-repository.js';

const { StudentModel, CourseModel } = models;

class StudentRepository extends MySqlRepository {
    constructor(){
        super(StudentModel)
    }

    getStudentById = async(id) => {
        try {
            return await this.model.findOne({
                where: { id },
                include: [
                    {
                        model: CourseModel,
                        as: 'coursesOfStudent'
                    }
                ]
            })
        } catch (error) {
            throw new Error(error)
        }
    }
    getAllStudents = async() => {
        try {
            return await this.model.findAll({
                include: [
                    {model: CourseModel,
                    as: "coursesofStudent",}
                ]
            })
            }
         catch (error) {
            throw new Error(error);
        }
    };

}

export const StudentRepositoryMySQL = new StudentRepository()
