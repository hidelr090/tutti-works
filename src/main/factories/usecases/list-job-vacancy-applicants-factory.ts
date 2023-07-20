import { DbListJobVacancyApplicants } from "@/data";
import { ListJobVacancyApplicants } from "@/domain/usecases";
import { JobVacancySequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbListJobVacancyApplicants = (): ListJobVacancyApplicants => {
  const jobVacancyRepository = new JobVacancySequelizeRepository();
  return new DbListJobVacancyApplicants(jobVacancyRepository);
};