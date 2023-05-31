export interface AddCandidateSocialGroupsRepository {
  add: (candidateId: string, socialGroupsIds: string[] ) => Promise<AddCandidateSocialGroupRepository.Result>;
}

export namespace AddCandidateSocialGroupRepository {
  export type Result = boolean;
}