import { DbFindJobVacancies } from "@/data";
import { FindJobVacancies } from "@/domain/usecases";
import { JobVacancySequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbFindJobVacancies = (): FindJobVacancies => {
  const jobVacancyRepository = new JobVacancySequelizeRepository();
  return new DbFindJobVacancies(jobVacancyRepository);
};