import { sequelize } from "@/infra/db/config/sequelize";
import { BaseModel } from "./base";
import { DataTypes, Model } from "sequelize";
import { UserSequelizeModel } from "./user";

class History extends Model {
  public id!: string;
  public deletedAt!: Date;
  public userId!: string;
  public start!: Date;
  public end!: Date;
  public name!: string;
  public description!: string;
}

History.init({
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
  start: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
}, {
  sequelize,
  tableName: 'history'
});

History.belongsTo(UserSequelizeModel, { foreignKey: 'userId' });

type HistoryModelStatic = typeof Model & {
  new (): History;
}

export const HistorySequelizeModel = History as HistoryModelStatic;