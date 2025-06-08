import { db } from "../config/db-connection.js";

export const PermissionModel = db.define(
    "permissions",
)