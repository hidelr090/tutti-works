import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from 'sequelize';
import { User, UserSequelizeModel } from "./user";
import { SocialGroup, SocialGroupSequelizeModel } from "./social-group";
import { CandidateSocialGroup } from "./candidate-social-group";

export class Candidate extends Model {
  public id!: string;
  public deletedAt!: Date;
  public userId!: string;
  public description!: string;
  public role!: string;

  public user!: User;
  public socialGroups!: SocialGroup[];

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
  Candidate.belongsToMany(SocialGroupSequelizeModel, {
    through: CandidateSocialGroup,
    foreignKey: {
      name: 'candidateId',
      allowNull: false,
    },
    as: 'socialGroups'
  })
};


type CandidateModelStatic = typeof Model & {
  new (): Candidate;
}

export const CandidateSequelizeModel = Candidate as CandidateModelStatic;