import { SearchForCandidates } from '../../../../../domain/usecases';

export interface ListCandidatesByRoleAndSocialGroupsRepository {
  listByRoleAndSocialGroups: (jobInfos: ListCandidatesByRoleAndSocialGroupsRepository.Params) => Promise<ListCandidatesByRoleAndSocialGroupsRepository.Result>;
}

export namespace ListCandidatesByRoleAndSocialGroupsRepository {
  export type Params = SearchForCandidates.Params;
  export type Result = SearchForCandidates.Result;
}