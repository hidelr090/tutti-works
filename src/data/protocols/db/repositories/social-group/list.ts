import { ListSocialGroups } from "@/domain/usecases";

export interface ListSocialGroupsRepository {
  list: () => Promise<ListSocialGroupsRepository.Result>;
}

export namespace ListSocialGroupsRepository {
  export type Result = ListSocialGroups.Result;
}