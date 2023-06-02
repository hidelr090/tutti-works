import { ListCandidateApplications } from "@/domain/usecases";

export interface ListCandidateJobVacanciesRepository {
  listCandidateJobVacancies: (candidateId: string) => Promise<ListCandidateApplications.Result>
}

export namespace ListCandidateJobVacanciesRepository {
  export type Result = ListCandidateApplications.Result;
}