export interface UpdateCandidate {
  update: (userId: string, data: UpdateCandidate.Params) => Promise<UpdateCandidate.Result>;
}

export namespace UpdateCandidate {
  export type Params = {
    description: string;
    role: string;
  };

  export type Result = boolean;
}