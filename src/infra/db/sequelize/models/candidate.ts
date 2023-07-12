import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';
import { User, UserSequelizeModel } from "./user";
import { SocialGroup, SocialGroupSequelizeModel } from "./social-group";
import { CandidateSocialGroup } from "./candidate-social-group";
import { CandidateJobVacancy } from "./candidate-job-vacancy";
import { JobVacancy, JobVacancySequelizeModel } from "./job-vacancy";

export class Candidate extends Model {
  public id!: string;
  public deletedAt!: Date;
  public userId!: string;
  public description!: string;
  public role!: string;

  public user!: User;
  public socialGroups!: SocialGroup[];
  public jobVacancies!: JobVacancy[];

  public static associate: () => void;
}

Candidate.init({
  ...BaseModel,
  userId: {
    type: DataTypes.UUID,
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
  Candidate.belongsToMany(SocialGroupSequelizeModel, {
    through: CandidateSocialGroup,
    foreignKey: {
      name: 'candidateId',
      allowNull: false,
    },
  });
  Candidate.belongsToMany(JobVacancySequelizeModel, {
    through: CandidateJobVacancy,
    foreignKey: {
      name: 'candidateId',
      allowNull: false,
    },
    as: 'jobVacancies'
  });
};


type CandidateModelStatic = typeof Model & {
  new (): Candidate;
}

export const CandidateSequelizeModel = Candidate as CandidateModelStatic;