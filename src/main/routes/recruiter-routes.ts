import { adaptRoute } from "@/main/adapters";
import { 
  makeAddRecruiterController,
  makeListRecruiterJobVacanciesController,
  makeUpdateRecruiterController,
  makeLoadRecruiterByUserIdController
} from '@/main/factories';

import { Router } from 'express';
import { recruiterAuth } from "@/main/middlewares/recruiter-auth";

export default (router: Router): void => {
  router.post('/recruiter', recruiterAuth, adaptRoute(makeAddRecruiterController()));
  router.get('/recruiter-job-vacancies', recruiterAuth, adaptRoute(makeListRecruiterJobVacanciesController()));
  router.get('/recruiter', recruiterAuth, adaptRoute(makeLoadRecruiterByUserIdController()));
  router.put('/recruiter', recruiterAuth, adaptRoute(makeUpdateRecruiterController()));
};