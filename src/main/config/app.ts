import express from 'express';
import { router } from './routes';
import "reflect-metadata";
import {sequelizeConfig} from '@/infra/db/config/sequelize';
import { Sequelize } from 'sequelize';

import { setupMiddlewares } from './middlewares';

export class App {
  public server;

  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.middleware();
    this.router();
    this.sequelize();
  }

  private middleware() {
    setupMiddlewares(this.server);
  }

  private router() {
    this.server.use(router);
  }

  private async sequelize() {
    const sequelize = new Sequelize(sequelizeConfig);
    await sequelize.authenticate();
    await sequelize.sync();
  }
}

