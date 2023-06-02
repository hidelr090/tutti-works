export interface ListCandidateApplications {
  listCandidateApplications: (candidateId: string) => Promise<ListCandidateApplications.Result>;
}

export namespace ListCandidateApplications {
  export type Result = {
    id: string;
    jobVacancy: {
      description: string;
      recruiterId: string;
      title: string;
      company: string;
      wage: number;
    }
  }[] | null;
}