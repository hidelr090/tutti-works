export interface ShowCandidateProfile {
  showCandidateProfile: (candidateId: string) => Promise<ShowCandidateProfile.Result>;
}

export namespace ShowCandidateProfile {
  export type Result = {
    name: string;
    email: string;
    identifierCode: string;
    phone: string;
    avatarUrl: string;
    description: string;
    history: {
      name: string;
      start: Date;
      end: Date;
      description: string;
    }[]
  };

  export type Params = string;
}