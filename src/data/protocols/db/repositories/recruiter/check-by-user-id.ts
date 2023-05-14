export interface CheckRecruiterByUserIdRepository {
  checkByUserId: (userId: string) => Promise<CheckRecruiterByUserIdRepository.Result>;
}

export namespace CheckRecruiterByUserIdRepository {
  export type Result = boolean;
} 