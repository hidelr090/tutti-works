import { ListCandidateApplications } from "@/domain/usecases";

export interface ListCandidateApplicationsRepository {
  listCandidateApplications: (candidateId: string) => Promise<ListCandidateApplications.Result>
}

export namespace ListCandidateApplicationsRepository {
  export type Result = ListCandidateApplications.Result;
}