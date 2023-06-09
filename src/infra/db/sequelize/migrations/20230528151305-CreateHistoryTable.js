'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('history', {
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
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      start: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      end: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('history');
  }
};
