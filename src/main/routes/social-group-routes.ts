import { adaptRoute } from "@/main/adapters";
import { 
  makeListSocialGroupsController,
} from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  router.get('/social-groups', adaptRoute(makeListSocialGroupsController()));
};