import express from 'express';
import { router } from './routes';

import { setupMiddlewares } from './middlewares';

export class App {
  public server;

  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.middleware();
    this.router();
  }

  private middleware() {
    setupMiddlewares(this.server);
  }

  private router() {
    this.server.use(router);
  }
}

