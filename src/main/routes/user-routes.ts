import { adaptRoute } from "@/main/adapters";
import { 
  makeUpdateUserController,
  makeLoadUserByIdController
} from '@/main/factories';

import { Router } from 'express';
import { auth } from "../middlewares/auth";

export default (router: Router): void => {
  router.put('/user', auth, adaptRoute(makeUpdateUserController()));
  router.get('/user', auth, adaptRoute(makeLoadUserByIdController()));
};