import { AddRecruiterRepository, FindRecruiterByUserIdRepository, CheckRecruiterByUserIdRepository, UpdateRecruiterRepository } from '../../../../data/protocols/db/repositories';
import { Recruiter, RecruiterSequelizeModel } from '../models';

Recruiter.associate();

export class RecruiterSequelizeRepository implements AddRecruiterRepository, CheckRecruiterByUserIdRepository, FindRecruiterByUserIdRepository, UpdateRecruiterRepository{
  async add(recruiterData: AddRecruiterRepository.Params): Promise<boolean>{
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

  async update(recruiterId: string, recruiterData: UpdateRecruiterRepository.Params): Promise<boolean>{
    const recruiter = await RecruiterSequelizeModel.update(recruiterData, {
      where: {id: recruiterId}
    });

    return recruiter !==null;
  }
}