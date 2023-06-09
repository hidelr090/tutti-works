import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';
import { Candidate, CandidateSequelizeModel } from "./candidate";
import { CandidateSocialGroup } from "./candidate-social-group";
import { JobVacancySocialGroup } from "./job-vacancy-social-group";
import { JobVacancySequelizeModel } from "./job-vacancy";

export class SocialGroup extends Model {
  public id!: string;
  public deletedAt!: Date;
  public description!: string;
  public title!: string;

  public candidates!: Candidate[];

  public static associate: () => void;
}

SocialGroup.init({
  ...BaseModel,
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  }
}, {
  sequelize,
  tableName: 'social-group'
});

SocialGroup.associate = () => {
  SocialGroup.belongsToMany(CandidateSequelizeModel, { 
    through: CandidateSocialGroup,
    foreignKey: {
      name: 'socialGroupId',
      allowNull: false,
    },
    otherKey: 'candidateId',
  });
  SocialGroup.belongsToMany(JobVacancySequelizeModel, { 
    through: JobVacancySocialGroup,
    foreignKey: {
      name: 'socialGroupId',
      allowNull: false,
    },
    otherKey: 'jobVacancyId',
  });
};


type SocialGroupModelStatic = typeof Model & {
  new (): SocialGroup;
}

export const SocialGroupSequelizeModel = SocialGroup as SocialGroupModelStatic;