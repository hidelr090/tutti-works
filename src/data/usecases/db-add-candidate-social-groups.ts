import { AddCandidateSocialGroups } from "@/domain/usecases";
import { AddCandidateSocialGroupsRepository, CheckExistingSocialGroupsRepository} from "@/data/protocols/db/repositories";

export class DbAddCandidateSocialGroups implements AddCandidateSocialGroups {
  constructor(
    private readonly addCandidateSocialGroupsRepository: AddCandidateSocialGroupsRepository,
    private readonly checkExistingSocialGroupsRepository: CheckExistingSocialGroupsRepository
  ){}

  async add (candidateId: string, socialGroupsIds: string[]): Promise<boolean>{
    let result = false;
    
    const existing = await this.checkExistingSocialGroupsRepository.checkExisting(candidateId, socialGroupsIds);
    
    if(!existing)
      result = await this.addCandidateSocialGroupsRepository.add(candidateId, socialGroupsIds);

    return result;
  }  
}