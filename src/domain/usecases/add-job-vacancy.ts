export interface AddJobVacancy {
  add: (jobVacancy: AddJobVacancy.Params) => Promise<AddJobVacancy.Result>;
}

export namespace AddJobVacancy{
  export type Params = {
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    salary: number;
    socialGroupsIds: string[];
  }

  export type Result = boolean;
}