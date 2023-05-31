import { AddCandidateSocialGroups } from "@/domain/usecases";
import { AddCandidateSocialGroupsRepository } from "@/data/protocols/db/repositories";

export class DbAddCandidateSocialGroups implements AddCandidateSocialGroups {
  constructor(
    private readonly addCandidateSocialGroupsRepository: AddCandidateSocialGroupsRepository
  ){}

  async add (candidateId: string, socialGroupsIds: string[]): Promise<boolean>{
    const result  = await this.addCandidateSocialGroupsRepository.add(candidateId, socialGroupsIds);

    return result;
  }  
}