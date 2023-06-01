import { AddRecruiterRepository, FindRecruiterByUserIdRepository, CheckRecruiterByUserIdRepository, UpdateRecruiterRepository, ListJobVacanciesByRecruiterIdRepository} from '@/data/protocols/db/repositories';
import { AddRecruiter, ListRecruiterJobVacancies, UpdateRecruiter} from '@/domain/usecases';
import { Recruiter, RecruiterSequelizeModel } from '@/infra/db/sequelize/models';

Recruiter.associate();

export class RecruiterSequelizeRepository implements AddRecruiterRepository {
  async add(recruiterData: AddRecruiter.Params): Promise<boolean>{
    const recruiter = await RecruiterSequelizeModel.create(recruiterData);

    return recruiter !== null;
  }
}