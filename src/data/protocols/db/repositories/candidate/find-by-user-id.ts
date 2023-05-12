import { ShowCandidateProfile } from "@/domain/usecases";

export interface FindCandidateByUserIdRepository {
  findByUserId: (userId: string) => Promise<FindCandidateByUserIdRepository.Result>;
}

export namespace FindCandidateByUserIdRepository {
  export type Result = ShowCandidateProfile.Result;
}