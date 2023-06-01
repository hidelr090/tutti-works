import { AddRecruiterRepository, FindRecruiterByUserIdRepository, CheckRecruiterByUserIdRepository, UpdateRecruiterRepository } from '@/data/protocols/db/repositories';
import { AddRecruiter, UpdateRecruiter} from '@/domain/usecases';
import { Recruiter, RecruiterSequelizeModel } from '@/infra/db/sequelize/models';

Recruiter.associate();

export class RecruiterSequelizeRepository implements AddRecruiterRepository, CheckRecruiterByUserIdRepository, FindRecruiterByUserIdRepository, UpdateRecruiterRepository{
  async add(recruiterData: AddRecruiter.Params): Promise<boolean>{
    const recruiter = await RecruiterSequelizeModel.create(recruiterData);

    return recruiter !== null;
  }

  async checkByUserId (userId: string): Promise<boolean>{
    const recruiter = await RecruiterSequelizeModel.findOne({where: {userId}});

    return recruiter !==null;
  }

  async findByUserId(userId: string): Promise<FindRecruiterByUserIdRepository.Result>{
    const recruiter = await RecruiterSequelizeModel.findOne({where: {userId}});
    let result = null;

    if(recruiter){
      result = {
        id: recruiter.id,
        company: recruiter.company,
        userId: recruiter.userId
      };
    }
    return result;
  }

  async update(recruiterId: string, recruiterData: UpdateRecruiter.Params): Promise<boolean>{
    const recruiter = await RecruiterSequelizeModel.update(recruiterData, {
      where: {id: recruiterId}
    });

    return recruiter !==null;
  }
}