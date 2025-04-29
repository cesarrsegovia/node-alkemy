import { Sequelize } from "sequelize";


export const db = new Sequelize('test', 'root', 'root1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });


export const initMySQLDB = async() => {
    try {
        await db.authenticate();
        //await db.sync({force: true}) //true elimina los registros de las tablas 
      } catch (error) {
        throw new Error(error)
      }
}