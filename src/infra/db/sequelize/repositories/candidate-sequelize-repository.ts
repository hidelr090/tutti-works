import { AddCandidateRepository } from '@/data/protocols/db/repositories';
import { CandidateSequelizeModel } from '@/infra/db/sequelize/models';

export class CandidateSequelizeRepository implements AddCandidateRepository {
  async add(candidateData: AddCandidateRepository.Params) : Promise<AddCandidateRepository.Result>{
    const candidate = await CandidateSequelizeModel.create(candidateData);
    return candidate !== null;
  }

  
}