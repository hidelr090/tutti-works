export interface UpdateJobVacancy {
  update: (vacancyId: string,jobVacancy: UpdateJobVacancy.Params) => Promise<UpdateJobVacancy.Result>;
}

export namespace UpdateJobVacancy{
  export type Params = {
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    salary: number;
    socialGroupsIds: string[];
    deletedAt: Date;
  }

  export type Result = boolean;
}