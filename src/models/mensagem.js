'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mensagem.belongsTo(models.Usuario, {
        foreignKey: "idOrigem",
        targetKey: "id"
      })
      Mensagem.belongsTo(models.Usuario, {
        foreignKey: "idDestino",
        targetKey: "id"
      })
    }
  };
  Mensagem.init({
    idOrigem: DataTypes.INTEGER,
    idDestino: DataTypes.INTEGER,
    dataHora: DataTypes.DATE,
    mensagem: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mensagem',
  });
  return Mensagem;
};