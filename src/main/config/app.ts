import express from 'express';
import router from './routes';
import "reflect-metadata";
import { sequelize } from '../../infra/db/config/sequelize';
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
    router(this.server);
  }

  private async sequelize() {
    await sequelize.authenticate();
    await sequelize.sync();
  }
}

