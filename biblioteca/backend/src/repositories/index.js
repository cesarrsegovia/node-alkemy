import { bookRepositoryMySQL } from './mysql/book-repository.js';

let bookRepository = null;
let persistence = 'mysql';

switch(persistence){
    case 'mysql':
        bookRepository = bookRepositoryMySQL;
        break;
    case 'mongodb':
        //await initMongoDB();
        //bookRepository = bookRepositoryMongo
    default:
        break;
}

export default { bookRepository };