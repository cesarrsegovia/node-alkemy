import bcrypt from 'bcrypt'

/** 
* Realiza el hash de la contraseña
* @param {String} password - La contraseña a hash
* @returns {String} La contraseña hash
*/

export const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

/** 
* Realiza la comparacion de password plana con pass hasheada
* @param {String} passwordPlain - La contraseña a hash
* @param {String} passwordHash - La contraseña hash
* @returns {Boolean}
*/

export const isValidPassword = (passwordPlain, passwordHash) =>{
    return bcrypt.compareSync(passwordPlain, passwordHash)
}