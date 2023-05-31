import { SearchForCandidates } from "@/domain/usecases/search-for-candidates";
import { ListCandidatesByRoleAndSocialGroupsRepository } from "@/data/protocols/db/repositories";

export class DbListCandidates implements SearchForCandidates {
  constructor (
    private readonly listCandidatesByRoleAndSocialGroupsRepository: ListCandidatesByRoleAndSocialGroupsRepository
  ){}

  async searchForCandidates (jobInfos: SearchForCandidates.Params): Promise<SearchForCandidates.Result>{
    
    const result = await this.listCandidatesByRoleAndSocialGroupsRepository.listByRoleAndSocialGroups(jobInfos);

    return result;
  }
}