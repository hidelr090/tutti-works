export interface ShowCandidateProfile {
  showCandidateProfile: (userId: string) => Promise<ShowCandidateProfile.Result>;
}

export namespace ShowCandidateProfile {
  export type Result = {
    user:{
      id: string;
      name: string;
      email: string;
      identifierCode: string;
      phone: string;
      avatarUrl: string;
    },
    candidate: {
      id: string;
      description: string;
      role: string;
    },
    history: {
      id: string;
      name: string;
      start: Date;
      end: Date;
      description: string;
    }[]
  };

  export type Params = string;
}