import { sequelize } from '@/infra/db/config/sequelize';
import { BaseModel } from './base';
import { DataTypes, Model } from 'sequelize';

class User extends Model {
  public id!: string;
  public deletedAt!: Date;
  public name!: string;
  public email!: string;
  public phone!: string;
  public avatarUrl!: string;
  public identifierCode!: string;
  public password!: string;
}

User.init({
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
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  role: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue: null,
  }
}, {
  sequelize,
  tableName: 'user'
});

type UserModelStatic = typeof Model & {
  new (): User;
};

export const UserSequelizeModel = User as UserModelStatic;