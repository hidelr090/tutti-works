'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('candidate-job-vacancy', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      },
      candidateId: {
        type: Sequelize.UUID,
        allowNull: true,
        defaultValue: null,
      },
      jobVacancyId: {
        type: Sequelize.UUID,
        allowNull: true,
        defaultValue: null,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('candidate-job-vacancy');
  }
};