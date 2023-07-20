export interface ListJobVacancyApplicants {
  listJobVacancyApplicants: (jobVacancyId: string) => Promise<ListJobVacancyApplicants.Result>;
}

export namespace ListJobVacancyApplicants {
  export type Result = {
    id: string;
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    wage: number;
    applicants: {
      id: string;
      name: string;
      email: string;
      phone: string;
      candidate: {
        role: string;
      };
    }[];
  } | null;
}