export interface CheckExistingSocialGroupsRepository {
  checkExisting: (candidateId: string, socialGroupsIds: string[] ) => Promise<CheckExistingSocialGroupRepository.Result>;
}

export namespace CheckExistingSocialGroupRepository {
  export type Result = boolean;
}