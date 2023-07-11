'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('candidate_social_group', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUID
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
      socialGroupId: {
        type: Sequelize.UUID,
        allowNull: true,
        defaultValue: null,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('candidate_social_group');
  }
};
