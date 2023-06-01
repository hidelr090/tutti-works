export interface ListCandidateApplications {
  listCandidateApplications: (candidateId: string) => Promise<ListCandidateApplications.Result>;
}

export namespace ListCandidateApplications {
  export type Result = {
    id: string;
    resumeUrl: string;
    jobVacancy: {
      description: string;
      recruiterId: string;
      title: string;
      company: string;
      wage: number;
      socialGroups: {
        id: string;
        title: string;
      }[];
    }
  }[];
}