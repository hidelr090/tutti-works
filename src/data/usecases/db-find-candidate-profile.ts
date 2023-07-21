import { ShowCandidateProfile } from "../../domain/usecases/show-candidate-profile";
import { FindCandidateByUserIdRepository } from '../protocols/db/repositories';

export class DbFindCandidateProfile implements ShowCandidateProfile{
  constructor(
    private readonly findCandidateByUserIdRepository: FindCandidateByUserIdRepository
  ){}

  async showCandidateProfile (userId: string): Promise<ShowCandidateProfile.Result>{
    
    const result = await this.findCandidateByUserIdRepository.findByUserId(userId);
    
    return result;
  }
}