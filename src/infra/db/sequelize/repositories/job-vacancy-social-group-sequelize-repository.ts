import { AddJobVacancySocialGroupRepository, DeleteJobVacancySocialGroupRepository } from "@/data/protocols/db/repositories/job-vacancy-social-group";
import { JobVacancySocialGroupSequelizeModel } from "@/infra/db/sequelize/models/job-vacancy-social-group";

export class JobVacancySocialGroupSequelizeRepository implements AddJobVacancySocialGroupRepository, DeleteJobVacancySocialGroupRepository{
  async add(jobVacancyId: string, socialGroupId: string): Promise<void>{
    await JobVacancySocialGroupSequelizeModel.create({
      jobVacancyId,
      socialGroupId
    })
  }

  async delete (jobVacancyId: string, socialGroupId: string): Promise<void>{
    await JobVacancySocialGroupSequelizeModel.destroy({where: { jobVacancyId, socialGroupId }});
  }
}