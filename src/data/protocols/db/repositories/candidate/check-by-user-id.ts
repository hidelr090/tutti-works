export interface CheckCandidateByUserIdRepository {
  checkByUserId: (userId: string) => Promise<CheckCandidateByUserIdRepository.Result>;
}

export namespace CheckCandidateByUserIdRepository {
  export type Result = boolean;
} 