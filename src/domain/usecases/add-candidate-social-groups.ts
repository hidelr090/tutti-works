export interface AddCandidateSocialGroups {
  add: (candidateId: string, socialGroupsIds: string[]) => Promise<AddCandidateSocialGroups.Result>;
}

export namespace AddCandidateSocialGroups {
  export type Result = boolean;
}