import { DbAddCandidateJobVacancy } from "../../../data";
import { SubmitApplication } from "../../../domain/usecases";
import { CandidateJobVacancySequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbAddCandidateJobVacancy = (): SubmitApplication => {
  const candidateJobVacancyRepository = new CandidateJobVacancySequelizeRepository();
  return new DbAddCandidateJobVacancy(candidateJobVacancyRepository);
};