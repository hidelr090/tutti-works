import { AddCandidate } from '../../domain/usecases';
import { AddCandidateRepository, CheckCandidateByUserIdRepository } from "../protocols/db/repositories";

export class DbAddCandidate implements AddCandidate {
  constructor(
    private readonly addCandidateRepository: AddCandidateRepository,
    private readonly checkCandidateByUserIdRepository: CheckCandidateByUserIdRepository
  ){}

  async add(candidateData: AddCandidate.Params): Promise<AddCandidate.Result> {

    const exists = await this.checkCandidateByUserIdRepository.checkByUserId(candidateData.userId);

    let result = null;

    if(!exists){
      result = await this.addCandidateRepository.add(candidateData);
    }

    return result;
  }
}