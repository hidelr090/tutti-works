import { sequelize } from '../../../../infra/db/config/sequelize';
import { BaseModel } from './base';
import { DataTypes, Model } from 'sequelize';
import { HistorySequelizeModel, History } from './history';
import { Candidate, CandidateSequelizeModel } from './candidate';
import { RecruiterSequelizeModel } from './recruiter';

export class User extends Model {
  public id!: string;
  public deletedAt!: Date;
  public name!: string;
  public email!: string;
  public phone!: string;
  public avatarUrl!: string;
  public identifierCode!: string;
  public password!: string;

  public candidate!: Candidate;
  public histories!: History[]; 

  public static associate: () => void;
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

User.associate = () => {
  User.hasMany(HistorySequelizeModel, {
    foreignKey: 'userId',
    as: 'histories',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    constraints: true,
  });
  User.hasOne(CandidateSequelizeModel, {
    foreignKey: 'userId',
    as: 'candidate',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    constraints: true,
  });
  User.hasOne(RecruiterSequelizeModel, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    constraints: true,
    as: 'recruiter',
  });
};

type UserModelStatic = typeof Model & {
  new (): User;
};

export const UserSequelizeModel = User as UserModelStatic;