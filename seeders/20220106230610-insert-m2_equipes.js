'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('m2_equipes', [
      {
        nome: 'Equipte Teste 1',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 2',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 3',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 4',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 5',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 6',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 7',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 8',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 9',
        ativo: 1
      },
      {
        nome: 'Equipte Teste 10',
        ativo: 1
      },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('m2_equipes', null, {});
  }
};
