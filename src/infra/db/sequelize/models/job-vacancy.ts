import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';
import { SocialGroup } from "./social-group";
import { RecruiterSequelizeModel } from "./recruiter";

export class JobVacancy extends Model {
  public id!: string;
  public deletedAt!: Date;
  public userId!: string;
  public description!: string;
  public role!: string;

  public static associate: () => void;
}

JobVacancy.init({
  ...BaseModel,
  recruiterId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  wage: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: null,
  }
}, {
  sequelize,
  tableName: 'JobVacancy'
});

JobVacancy.associate = () => {
  JobVacancy.belongsTo(RecruiterSequelizeModel, { foreignKey: 'recruiterId', as: 'recruiter'});
};


type JobVacancyModelStatic = typeof Model & {
  new (): JobVacancy;
}

export const JobVacancySequelizeModel = JobVacancy as JobVacancyModelStatic;