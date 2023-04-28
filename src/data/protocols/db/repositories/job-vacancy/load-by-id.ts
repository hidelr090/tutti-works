export interface LoadJobVacancyByIdRepository {
  loadById: (id: string) => Promise<LoadJobVacancyByIdRepository.Result>;
}

export namespace LoadJobVacancyByIdRepository {
  export type Result = {
    id: string;
    description: string;
    announcerId: string;
    title: string;
    company: string;
    salary: number;
    socialGroupsIds: string[];
  }
}