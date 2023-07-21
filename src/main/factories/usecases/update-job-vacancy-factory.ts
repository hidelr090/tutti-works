import { DbUpdateJobVacancy } from "../../../data";
import { UpdateJobVacancy } from "../../../domain/usecases";
import { JobVacancySequelizeRepository, JobVacancySocialGroupSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbUpdateJobVacancy = (): UpdateJobVacancy => {
  const jobVacancyRepository = new JobVacancySequelizeRepository();
  const jobVacancySocialGroupRepository = new JobVacancySocialGroupSequelizeRepository();
  return new DbUpdateJobVacancy(jobVacancyRepository, jobVacancyRepository, jobVacancySocialGroupRepository, jobVacancySocialGroupRepository);
};