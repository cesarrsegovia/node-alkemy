import { Sequelize } from 'sequelize';

export const db = new Sequelize('test', 'root', 'root1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

export const initMySqlDB = async () => {
    try {
        await db.sync({force: false})
    } catch (error) {
        throw new Error(err);
    }
}