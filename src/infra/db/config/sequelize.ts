import { Dialect } from "sequelize";

export const sequelizeConfig = {
  dialect: "postgres" as Dialect,
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWD || 'tutti123',
  database: process.env.DB_DATABASE || 'postgres',
  port: Number(process.env.DB_PORT) || 5432,
};