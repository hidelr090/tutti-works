'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user',{
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
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
      name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      identifierCode: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      token: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      role: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        defaultValue: null,
      },
      avatarUrl: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('user');
  }
};
