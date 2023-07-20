export interface ListRecruiterJobVacancies {
  listRecruiterJobVacancies: (recruiterId: string) => Promise<ListRecruiterJobVacancies.Result>;
}

export namespace ListRecruiterJobVacancies {
  export type Result = {
    id: string;
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    wage: number;
    socialGroups: {
      id: string;
      title: string;
    }[];
  }[] | null;
}