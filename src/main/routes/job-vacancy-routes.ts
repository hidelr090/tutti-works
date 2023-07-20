import { adaptRoute } from "@/main/adapters";
import { 
  makeAddJobVacancyController,
  makeUpdateJobVacancyController,
  makeFindJobVacanciesController,
  makeSubmitApplicationController,
  makeListJobVacancyApplicantsController
} from '@/main/factories';

import { Router } from 'express';
import { recruiterAuth } from "@/main/middlewares/recruiter-auth";
import { auth } from "@/main/middlewares/auth";

export default (router: Router): void => {
  router.post('/job-vacancy', recruiterAuth, adaptRoute(makeAddJobVacancyController()));
  router.put('/job-vacancy', recruiterAuth, adaptRoute(makeUpdateJobVacancyController()));
  router.get('/job-vacancy', adaptRoute(makeFindJobVacanciesController()));
  router.post('/submit-application', auth, adaptRoute(makeSubmitApplicationController()));
  router.get('/job-vacancy-applicants', adaptRoute(makeListJobVacancyApplicantsController()));
};