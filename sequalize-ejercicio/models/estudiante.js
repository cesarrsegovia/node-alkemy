'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estudiante.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    estudianteId: DataTypes.INTEGER,
    cursos: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'estudiante',
  });
  return estudiante;
};