import { adaptRoute } from "@/main/adapters";
import { 
  makeAddCandidateController, 
  makeAddCandidateSocialGroupsController, 
  makeListCandidateApplicationsController,
  makeUpdateCandidateController,
  makeSearchForCandidatesController,
  makeShowCandidateProfileController
} from '@/main/factories';

import { Router } from 'express';
import { auth } from "../middlewares/auth";

export default (router: Router): void => {
  router.post('/candidate', auth, adaptRoute(makeAddCandidateController()));
  router.post('/candidate-social-groups', auth, adaptRoute(makeAddCandidateSocialGroupsController()));
  router.get('/candidate-applications', adaptRoute(makeListCandidateApplicationsController()));
  router.put('/candidate', auth, adaptRoute(makeUpdateCandidateController()));
  router.get('/candidate-browse', adaptRoute(makeSearchForCandidatesController()));
  router.get('/candidate-profile', auth, adaptRoute(makeShowCandidateProfileController()));
};