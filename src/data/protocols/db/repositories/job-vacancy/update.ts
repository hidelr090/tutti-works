export interface UpdateJobVacancyRepository {
  update: (jobVacancyId: string, jobVacancyData: UpdateJobVacancyRepository.Params) => Promise<UpdateJobVacancyRepository.Result>;
}

export namespace UpdateJobVacancyRepository {
  export type Params = {
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    wage: number;
    deletedAt: Date;
  };
  export type Result = boolean;
}