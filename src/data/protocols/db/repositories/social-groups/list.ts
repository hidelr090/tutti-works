import { ListSocialGroups } from "@/domain/usecases/list-social-groups";

export interface ListSocialGroupsRepository {
  list: () => Promise<ListSocialGroupsRepository.Result>;
}

export namespace ListSocialGroupsRepository {
  export type Result = ListSocialGroups.Result;
}