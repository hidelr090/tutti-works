import { SubmitApplication } from "@/domain/usecases";

import Chance  from "chance";

const chance = new Chance();

export const mockSubmitApplication = (): SubmitApplication.Params => ({
  candidateId: chance.guid(),
  jobVacancyId: chance.guid(),
  resumeUrl: 'www.resume.com/' + chance.string({ length: 12 })
});