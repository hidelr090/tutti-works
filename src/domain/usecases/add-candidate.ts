export interface AddCandidate {
  add: (candidateData: AddCandidate.Params) => Promise<AddCandidate.Result>;
}

export namespace AddCandidate {
  export type Params = {
    userId: string;
    description: string;
  }

  export type Result = boolean;
}