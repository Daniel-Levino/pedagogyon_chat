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
      idOrigem: {
        field: "idOrigem",
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id"
        }
      },
      idDestino: {
        field: "idDestino",
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id"
        }
      },
      dataHora: {
        type: Sequelize.DATE
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