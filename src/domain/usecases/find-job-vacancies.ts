export interface FindJobVacancies {
  findJobVacancies: (jobInfos: FindJobVacancies.Params) => Promise<FindJobVacancies.Result>; 
}

export namespace FindJobVacancies {
  export type Params = {
    jobInfos: string;
    socialGroupsIds: string[];
  };

  export type Result = {
    description: string;
    announcerId: string;
    title: string;
    company: string;
    salary: number;
    socialGroups: {
      id: string;
      title: string;
    }[];
  }[];
}