'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mensagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCliente: {
        field: "idCliente",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Clientes",
          key: "id"
        }
      },
      idProfissional: {
        field: "idProfissional",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Profissionals",
          key: "id"
        }
      },
      dataHora: {
        type: Sequelize.DATEONLY
      },
      mensagem: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mensagems');
  }
};