import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';
import { SocialGroup, SocialGroupSequelizeModel } from "./social-group";
import { RecruiterSequelizeModel } from "./recruiter";
import { JobVacancySocialGroup } from "./job-vacancy-social-group";

export class JobVacancy extends Model {
  public id!: string;
  public deletedAt!: Date;
  public userId!: string;
  public description!: string;
  public role!: string;
  public recruiterId!: string;
  public title!: string;
  public company!: string;
  public wage!: number;

  public socialGroups!: SocialGroup[];

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
  JobVacancy.belongsToMany(SocialGroupSequelizeModel, { 
    through: JobVacancySocialGroup,
    foreignKey: {
      name: 'jobVacancyId',
      allowNull: false,
    },
    otherKey: 'socialGroupId',
    as: 'socialGroups'
  });
};


type JobVacancyModelStatic = typeof Model & {
  new (): JobVacancy;
}

export const JobVacancySequelizeModel = JobVacancy as JobVacancyModelStatic;