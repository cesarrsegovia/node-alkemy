import { courseRepositoryMySQL } from "./mysql/course-repository.js";
import { StudentRepositoryMySQL } from "./mysql/student-repository.js";

let studentRepository = null;
let courseRepository = null;
let persistence = 'mysql';

switch(persistence){
    case 'mysql':
        studentRepository = StudentRepositoryMySQL;
        courseRepository = courseRepositoryMySQL
        break;
    default:
        break;
}

export default { studentRepository, courseRepository }