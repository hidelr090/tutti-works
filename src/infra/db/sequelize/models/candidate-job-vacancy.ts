import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';

export class CandidateJobVacancy extends Model {
  public id!: string;
  public deletedAt!: Date;
  public candidateId!: string;
  public jobVacancyId!: string;

  public static associate: () => void;
}

CandidateJobVacancy.init({
  ...BaseModel,
  candidateId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'candidate',
      key: 'id'
    }
  },
  jobVacancyId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'social_group',
      key: 'id'
    }
  },
  resumeUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  tableName: 'candidate_social_group'
});

type CandidateJobVacancyModelStatic = typeof Model & {
  new (): CandidateJobVacancy;
}

export const CandidateJobVacancySequelizeModel = CandidateJobVacancy as CandidateJobVacancyModelStatic;