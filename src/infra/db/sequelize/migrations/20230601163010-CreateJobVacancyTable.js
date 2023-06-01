'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('job-vacancy', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
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
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      recruiterId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'recruiter',
          key: 'id',
        },
        defaultValue: null
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      wage: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: null
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('job-vacancy');
  }
};
