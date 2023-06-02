import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';

export class JobVacancySocialGroup extends Model {
  public id!: string;
  public deletedAt!: Date;
  public jobVacancyId!: string;
  public socialGroupId!: string;

  public static associate: () => void;
}

JobVacancySocialGroup.init({
  ...BaseModel,
  jobVacancyId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'job-vacancy',
      key: 'id'
    }
  },
  socialGroupId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'social-group',
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'job-vacancy-social-group'
});

type JobVacancySocialGroupModelStatic = typeof Model & {
  new (): JobVacancySocialGroup;
}

export const JobVacancySocialGroupSequelizeModel = JobVacancySocialGroup as JobVacancySocialGroupModelStatic;