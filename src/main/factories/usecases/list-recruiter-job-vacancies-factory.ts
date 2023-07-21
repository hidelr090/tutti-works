import { DbListRecruiterJobVacancies } from "../../../data";
import { ListRecruiterJobVacancies } from "../../../domain/usecases";
import { JobVacancySequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbListRecruiterJobVacancies = (): ListRecruiterJobVacancies => {
  const jobVacancyRepository = new JobVacancySequelizeRepository();
  return new DbListRecruiterJobVacancies(jobVacancyRepository);
};