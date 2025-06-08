import { Sequelize } from 'sequelize';
import config from '.';

export const db = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: 'mysql',
        //logging: false,
    }
)

export const initMySQLDB = async () => {
    try {
        await db.sync({ force: false });
    } catch (error) {
        throw new Error(error)
    }
}