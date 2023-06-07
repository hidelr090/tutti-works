import { adaptRoute } from "@/main/adapters";
import { makeAddUserController, makeLoginController } from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeAddUserController()));
  router.post('/login', adaptRoute(makeLoginController()));
};