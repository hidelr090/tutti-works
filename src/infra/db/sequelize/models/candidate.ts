import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';
import { User, UserSequelizeModel } from "./user";

export class Candidate extends Model {
  public id!: string;
  public deletedAt!: Date;
  public userId!: string;
  public description!: string;
  public role!: string;

  public user!: User;

  public static associate: () => void;
}

Candidate.init({
  ...BaseModel,
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  }
}, {
  sequelize,
  tableName: 'candidate'
});

Candidate.associate = () => {
  Candidate.belongsTo(UserSequelizeModel, { foreignKey: 'userId', as: 'user'});
};


type CandidateModelStatic = typeof Model & {
  new (): Candidate;
}

export const CandidateSequelizeModel = Candidate as CandidateModelStatic;