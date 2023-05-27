import { sequelize } from '@/infra/db/config/sequelize';
import { BaseModel } from './base';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
  ...BaseModel,
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  identifierCode: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },  
  password: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  }
}, {
  tableName: 'user'
});