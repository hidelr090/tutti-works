import { ShowCandidateProfile } from "@/domain/usecases/show-candidate-profile";
import { FindCandidateByUserIdRepository } from '@/data/protocols/db/repositories';

export class DbFindCandidateProfile implements ShowCandidateProfile{
  constructor(
    private readonly findCandidateByUserIdRepository: FindCandidateByUserIdRepository
  ){}

  async showCandidateProfile (candidateId: string): Promise<ShowCandidateProfile.Result>{
    
    const result = await this.findCandidateByUserIdRepository.findByUserId(candidateId);
    
    return result;
  }
}