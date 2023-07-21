import { adaptRoute } from "../adapters";
import { 
  makeListSocialGroupsController,
} from '../factories';

import { Router } from 'express';

export default (router: Router): void => {
  router.get('/social-groups', adaptRoute(makeListSocialGroupsController()));
};