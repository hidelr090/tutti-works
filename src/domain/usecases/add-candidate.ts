export interface AddCandidate {
  add: (candidateData: AddCandidate.Params) => Promise<AddCandidate.Result>;
}

export namespace AddCandidate {
  export type Params = {
    userId: string;
    description: string;
    role: string;
  }

  export type Result = boolean;
}