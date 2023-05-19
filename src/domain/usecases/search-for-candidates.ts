export interface SearchForCandidates {
  searchForCandidates: (jobInfos: SearchForCandidates.Params) => Promise<SearchForCandidates.Result>; 
}

export namespace SearchForCandidates {
  export type Params = {
    jobInfos: string;
    socialGroupsIds: string[];
  };

  export type Result = {
    user:{
      id: string;
      name: string;
      email: string;
      identifierCode: string;
      phone: string;
      avatarUrl: string;
    };
    candidate: {
      id: string;
      description: string;
      role: string;
    }
    history: {
      id: string;
      name: string;
      start: Date;
      end: Date;
      description: string;
    }[]
  }[];
}