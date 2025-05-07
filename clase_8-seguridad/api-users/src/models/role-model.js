import { DataTypes } from "sequelize";
import { db } from "../config/db-connection.js";


export const RoleModel = db.define("roles",
    {
        name: { type: DataTypes.STRING, allowNull: false}
    },
    {
        timestamps: false
    }
)

/*
CREATE TABLE test.roles (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
    )
INSERT INTO test.roles (name)
VALUES ('admin'), ('usuario'), ('invitado');
*/