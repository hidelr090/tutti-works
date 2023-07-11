'use strict';

const { v4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const titles = [
      'LBGTQIA+',
      'Idoso',
      'Afrodescendente',
      'Refugiado',
      'PCD',
      'Outros'
    ];
    await queryInterface.bulkInsert('social_group', titles.map(title => ({
      id: v4(),
      title: title,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('social_group', null, {});
    await queryInterface.dropTable('social-group');
  }
};
