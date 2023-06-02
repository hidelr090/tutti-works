import { AddJobVacancySocialGroupRepository } from "@/data/protocols/db/repositories/job-vacancy-social-group";
import { JobVacancySocialGroupSequelizeModel } from "@/infra/db/sequelize/models/job-vacancy-social-group";

export class JobVacancySocialGroupSequelizeRepository implements AddJobVacancySocialGroupRepository {
  async add(jobVacancyId: string, socialGroupId: string): Promise<void>{
    await JobVacancySocialGroupSequelizeModel.create({
      jobVacancyId,
      socialGroupId
    })
  }
}