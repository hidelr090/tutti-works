import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';

export class CandidateSocialGroup extends Model {
  public id!: string;
  public deletedAt!: Date;
  public candidateId!: string;
  public socialGroupId!: string;

  public static associate: () => void;
}

CandidateSocialGroup.init({
  ...BaseModel,
  candidateId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'candidate',
      key: 'id'
    }
  },
  socialGroupId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'social_group',
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'candidate_social_group'
});

type CandidateSocialGroupModelStatic = typeof Model & {
  new (): CandidateSocialGroup;
}

export const CandidateSocialGroupSequelizeModel = CandidateSocialGroup as CandidateSocialGroupModelStatic;