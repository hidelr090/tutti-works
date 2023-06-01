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
    recruiterId: string;
    title: string;
    company: string;
    wage: number;
    socialGroups: {
      id: string;
      title: string;
    }[];
  }[];
}