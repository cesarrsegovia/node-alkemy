import { UserModel } from "./user-model.js";
import { RoleModel } from "./role-model.js";
import { PermissionModel } from "./permissions-model.js";

UserModel.belongsTo(RoleModel, { //relacionamos usuaruis con roles
    foreignKey: "role_id",
    as: "role"
})

RoleModel.hasMany(UserModel, { //un rol puede tener muchos usuarios
    foreignKey: "role_id",
    as: "usuarios"
})

RoleModel.belongsToMany(PermissionModel, { //un rol puede tener muchos permisos
    through: {model: "role_permissions", timestamps: false},
    foreignKey: "role_id",
    otherKey: "permission_id",
    as: "permisos"
})

PermissionModel.belongsToMany(RoleModel, { //un permiso puede pertenecer a muchos roles
    through: {model: "role_permissions", timestamps: false},
    foreignKey: "permission_id",
    otherKey: "role_id",
    as: "roles"
}) 

export default {
    UserModel,
    RoleModel,
    PermissionModel
}