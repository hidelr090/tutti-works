export interface AddJobVacancy {
  add: (jobVacancy: AddJobVacancy.Params) => Promise<AddJobVacancy.Result>;
}

export namespace AddJobVacancy{
  export type Params = {
    description: string;
    announcerId: string;
    title: string;
    company: string;
    salary: number;
  }

  export type Result = boolean;
}