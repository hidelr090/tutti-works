import { App } from './config/app';
import env from './config/env';

const app = new App();

app.server.listen(Number(env.port), env.hostname ,() => console.log(`Server running on ${env.hostname}/${env.port}`));

export const server = app.server;