import { AddJobVacancyRepository, FindJobVacanciesRepository, LoadJobVacancyByIdRepository, UpdateJobVacancyRepository} from "@/data";
import { FindJobVacancies, UpdateJobVacancy, ListRecruiterJobVacancies } from '@/domain/usecases';
import { JobVacancy, JobVacancySequelizeModel } from "@/infra/db/sequelize/models";

JobVacancy.associate();

export class JobVacancySequelizeRepository implements AddJobVacancyRepository {
  async add(jobVacancyData: AddJobVacancyRepository.Params): Promise<boolean>{

    const jobVacancy = await JobVacancySequelizeModel.create(jobVacancyData);
    
    return jobVacancy !==null;
  }
}