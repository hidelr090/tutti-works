export interface AddCandidateSocialGroupRepository {
  add: (data: AddCandidateSocialGroupRepository.Params ) => Promise<AddCandidateSocialGroupRepository.Result>;
}

export namespace AddCandidateSocialGroupRepository {
  export type Params = {
    candidateId: string,
    socialGroupsIds: string[]
  };
  export type Result = boolean;
}