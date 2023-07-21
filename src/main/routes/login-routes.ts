import { adaptRoute } from "../adapters";
import { makeAddUserController, makeLoginController } from '../factories';

import { Router } from 'express';

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeAddUserController()));
  router.post('/login', adaptRoute(makeLoginController()));
};