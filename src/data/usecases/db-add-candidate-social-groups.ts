import { AddCandidateSocialGroups } from '../../domain/usecases';
import { AddCandidateSocialGroupsRepository, FindSocialGroupsByCandidateIdRepository} from "../protocols/db/repositories";

export class DbAddCandidateSocialGroups implements AddCandidateSocialGroups {
  constructor(
    private readonly addCandidateSocialGroupsRepository: AddCandidateSocialGroupsRepository,
    private readonly findSocialGroupsByCandidateIdRepository: FindSocialGroupsByCandidateIdRepository
  ){}

  async add (candidateId: string, socialGroupsIds: string[]): Promise<boolean>{
    let result = false;
    
    const existing = await this.findSocialGroupsByCandidateIdRepository.findByCandidateId(candidateId);
    
    const socialGroupsToInsert = socialGroupsIds.filter(item => !existing.includes(item));

    if(socialGroupsToInsert && socialGroupsToInsert.length > 0)
      result = await this.addCandidateSocialGroupsRepository.add(candidateId, socialGroupsIds);

    return result;
  }  
}