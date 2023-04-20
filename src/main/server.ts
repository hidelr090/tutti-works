import { App } from './config/app';
import env from './config/env';

const app = new App();

app.server.listen(env.port, () => 'Running on localhost');

export const server = app.server;