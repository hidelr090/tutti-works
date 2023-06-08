import { Sequelize } from "sequelize";
import { Dialect } from "sequelize/types";
import dotenv from 'dotenv';

dotenv.config();

const sequelizeConfig = {
  dialect: "mysql" as Dialect,
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'tutti_dev',
  password: process.env.DB_PASSWD || 'tutti123',
  database: process.env.DB_DATABASE || 'tutti_dev',
  port: Number(process.env.DB_PORT) || 3306,
  logging: false,
  URL: process.env.DB_URL || 'jdbc:mysql://localhost:3306/tutti_dev',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  }
}

export const sequelize = new Sequelize(sequelizeConfig);