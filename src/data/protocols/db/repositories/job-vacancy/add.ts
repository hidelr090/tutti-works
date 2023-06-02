export interface AddJobVacancyRepository {
  add: (jobVacancyData: AddJobVacancyRepository.Params) => Promise<AddJobVacancyRepository.Result>;
}

export namespace AddJobVacancyRepository {
  export type Params = {
    id: string;
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    wage: number;
  };
  export type Result = boolean;
}