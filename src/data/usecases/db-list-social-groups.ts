import { ListSocialGroups } from "@/domain/usecases/list-social-groups";
import { ListSocialGroupsRepository } from "@/data/protocols/db/repositories";


export class DbListSocialGroups implements ListSocialGroups {
  constructor(
    private readonly listSocialGroupsRepository: ListSocialGroupsRepository
  ){}

  listSocialGroups(): Promise<ListSocialGroups.Result>{
    const result = this.listSocialGroupsRepository.list(); 

    return result;
  }
}