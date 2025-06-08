import bcrypt from 'bcrypt';

/**
 * realiza el hash de una contraseña
 * @param {String} password - la contraseña a hashear
 * @returns {String} - la contraseña hasheada
 */

export const createHash = async (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

/**
 * realiza la comparacion de una contraseña con su hash
 * @param {String} passwordPlain - la contraseña sin hashear
 * @param {String} passwordHash - la contraseña a hashear
 * @returns {Boolean} - la contraseña hasheada
 */

export const isValidPassword = (passwordPlain, passwordHash) => {
    return bcrypt.compareSync(passwordPlain, passwordHash);
}
