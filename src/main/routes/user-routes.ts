import { adaptRoute } from "@/main/adapters";
import { 
  makeUpdateUserController,
} from '@/main/factories';

import { Router } from 'express';
import { auth } from "../middlewares/auth";

export default (router: Router): void => {
  router.put('/user', auth, adaptRoute(makeUpdateUserController()));
};