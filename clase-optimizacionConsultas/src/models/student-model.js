import { db } from '../config/db-connection.js';
import { DataTypes } from 'sequelize';

// create tables students { id int auto_increment primary_key, firstName VARCHAR(255), lastName varchar(255), studentId INT NOT NULL, deletedAt TIMESTAMP NULL, createdAt, updatedAt}
export const StudentModel = db.define('students', {
    firstName: {
        type: DataTypes.STRING(255), //VARCHAR(255)
        allowNull: false // NOT NULL
    },
    lastName:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false // NOT NULL
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true //crea un indice
    },
    deletedAt:{
        type: DataTypes.DATE,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},{
    paranoid:true,
    indexes: [
        {
            fields: ["studentId"]
        }
    ] 
})