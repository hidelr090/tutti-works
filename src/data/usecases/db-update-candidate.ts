import { UpdateCandidate } from "@/domain/usecases";
import { UpdateCandidateRepository, FindCandidateByUserIdRepository } from "@/data/protocols/db/repositories";

export class DbUpdateCandidate implements UpdateCandidate {
  constructor(
    private readonly updateCandidateRepository: UpdateCandidateRepository,
    private readonly findCandidateByUserIdRepository: FindCandidateByUserIdRepository
  ){}

  async update(userId: string, data: UpdateCandidate.Params): Promise<UpdateCandidate.Result> {

    const candidateToUpdate = await this.findCandidateByUserIdRepository.findByUserId(userId);
    
    let result = false;

    if(candidateToUpdate){
      await this.updateCandidateRepository.update(candidateToUpdate.candidate.id, { ...candidateToUpdate, ...data });
      result = true;
    }

    return result;
  }
}