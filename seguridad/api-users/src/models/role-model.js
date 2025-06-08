import { DataTypes } from "sequelize";
import { db } from "../config/db-connection.js";

export const RoleModel = db.define(
    "roles", 
    {
        name: {type: DataTypes.STRING, allowNull: false,},

    },
    {
        timestamps: false,
    }


)
