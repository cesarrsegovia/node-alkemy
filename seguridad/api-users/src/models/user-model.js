import { db } from "../config/db-connection";

export const UserModel = db.define("users", {
    first_name: { type: db.Sequelize.STRING, allowNull: false },
    last_name: { type: db.Sequelize.STRING, allowNull: false },
    email: { type: db.Sequelize.STRING, allowNull: false, unique: true },
    password: { type: db.Sequelize.STRING, allowNull: false },
    role_id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
        references: {
            model: 'roles',
            key: 'id' //role_id --> id(roles)
        }
    }
},
{
    paranoid: true,
    timestamps: true,}
)