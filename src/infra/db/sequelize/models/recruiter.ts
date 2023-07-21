import { sequelize } from "../../../../infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';
import { User, UserSequelizeModel } from "./user";

export class Recruiter extends Model {
  public id!: string;
  public deletedAt!: Date;
  public userId!: string;
  public company!: string;

  public user!: User;

  public static associate: () => void;
}

Recruiter.init({
  ...BaseModel,
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
}, {
  sequelize,
  tableName: 'recruiter'
});

Recruiter.associate = () => {
  Recruiter.belongsTo(UserSequelizeModel, { foreignKey: 'userId'});
};


type RecruiterModelStatic = typeof Model & {
  new (): Recruiter;
}

export const RecruiterSequelizeModel = Recruiter as RecruiterModelStatic;