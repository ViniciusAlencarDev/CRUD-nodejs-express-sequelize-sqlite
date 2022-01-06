'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('m2_usuarios', {
      idusuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremente: true
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      login: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      idequipe: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'm2_equipes',
          key: 'idequipe',
        }
      },
      ativo: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('m2_usuarios')
  }
};
