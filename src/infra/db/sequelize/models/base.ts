import { DataTypes } from 'sequelize';
import { v4 } from 'uuid';

export const BaseModel = {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: v4(),
    allowNull: false,
    primaryKey: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
    allowNull: true,
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: null,
    allowNull: true,
  },
};