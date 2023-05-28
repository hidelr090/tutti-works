import { AddCandidateRepository, CheckCandidateByUserIdRepository } from '@/data/protocols/db/repositories';
import { CandidateSequelizeModel } from '@/infra/db/sequelize/models';

export class CandidateSequelizeRepository implements AddCandidateRepository, CheckCandidateByUserIdRepository {
  async add(candidateData: AddCandidateRepository.Params) : Promise<AddCandidateRepository.Result>{
    const candidate = await CandidateSequelizeModel.create(candidateData);
    return candidate !== null;
  }

  async checkByUserId (userId: string): Promise<boolean>{
    const candidate = await CandidateSequelizeModel.findOne({ where: { userId }});
    return candidate !== null;
  }

  
}