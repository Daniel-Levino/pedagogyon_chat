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
      Mensagem.belongsTo(models.Cliente,{
        foreignKey: "idCliente",
        targetKey:"id"
      })
      Mensagem.belongsTo(models.Profissional,{
        foreignKey: "idProfissional",
        targetKey:"id"
      })
    }
  };
  Mensagem.init({
    idCliente: DataTypes.INTEGER,
    idProfissional: DataTypes.INTEGER,
    dataHora: DataTypes.DATEONLY,
    mensagem: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mensagem',
  });
  return Mensagem;
};