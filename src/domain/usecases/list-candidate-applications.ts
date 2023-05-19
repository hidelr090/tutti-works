export interface ListCandidateApplications {
  listCandidateApplications: (candidateId: string) => Promise<ListCandidateApplications.Result>;
}

export namespace ListCandidateApplications {
  export type Result = {
    id: string;
    resumeUrl: string;
    jobVacancy: {
      description: string;
      announcerId: string;
      title: string;
      company: string;
      salary: number;
      socialGroups: {
        id: string;
        title: string;
      }[];
    }
  }[];
}