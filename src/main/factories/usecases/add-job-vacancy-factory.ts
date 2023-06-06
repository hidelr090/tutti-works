import { DbAddJobVacancy } from "@/data";
import { AddJobVacancy } from "@/domain/usecases";
import { JobVacancySequelizeRepository, JobVacancySocialGroupSequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbAddJobVacancy = (): AddJobVacancy => {
  const jobVacancySequelizeRepository = new JobVacancySequelizeRepository();
  const jobVacancySocialGroupRepository = new JobVacancySocialGroupSequelizeRepository();
  return new DbAddJobVacancy(jobVacancySequelizeRepository, jobVacancySocialGroupRepository);
};