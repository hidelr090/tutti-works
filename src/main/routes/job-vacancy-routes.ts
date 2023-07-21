import { adaptRoute } from "../adapters";
import { 
  makeAddJobVacancyController,
  makeUpdateJobVacancyController,
  makeFindJobVacanciesController,
  makeSubmitApplicationController,
  makeListJobVacancyApplicantsController
} from '../factories';

import { Router } from 'express';
import { recruiterAuth } from "../middlewares/recruiter-auth";
import { auth } from "../middlewares/auth";

export default (router: Router): void => {
  router.post('/job-vacancy', recruiterAuth, adaptRoute(makeAddJobVacancyController()));
  router.put('/job-vacancy', recruiterAuth, adaptRoute(makeUpdateJobVacancyController()));
  router.get('/job-vacancy', adaptRoute(makeFindJobVacanciesController()));
  router.post('/submit-application', auth, adaptRoute(makeSubmitApplicationController()));
  router.get('/job-vacancy-applicants', recruiterAuth,adaptRoute(makeListJobVacancyApplicantsController()));
};