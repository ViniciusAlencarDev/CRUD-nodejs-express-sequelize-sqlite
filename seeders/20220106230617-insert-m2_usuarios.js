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
      await queryInterface.bulkInsert('m2_usuarios', [
        {
          nome: 'Equipte Teste 1',
          password: 'Teste@321',
          login: 'vini1',
          idequipe: 1,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 2',
          password: 'Teste@321',
          login: 'vini2',
          idequipe: 2,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 3',
          password: 'Teste@321',
          login: 'vini3',
          idequipe: 3,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 4',
          password: 'Teste@321',
          login: 'vini4',
          idequipe: 4,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 5',
          password: 'Teste@321',
          login: 'vini5',
          idequipe: 5,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 6',
          password: 'Teste@321',
          login: 'vini6',
          idequipe: 6,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 7',
          password: 'Teste@321',
          login: 'vini7',
          idequipe: 7,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 8',
          password: 'Teste@321',
          login: 'vini8',
          idequipe: 8,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 9',
          password: 'Teste@321',
          login: 'vini9',
          idequipe: 9,
          ativo: 1
        },
        {
          nome: 'Equipte Teste 10',
          password: 'Teste@321',
          login: 'vini10',
          idequipe: 10,
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
     await queryInterface.bulkDelete('m2_usuarios', null, {});
  }
};
