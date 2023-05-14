export interface AddRecruiter {
  add: (recruiterData: AddRecruiter.Params) => Promise<AddRecruiter.Result>;
}

export namespace AddRecruiter {
  export type Params = {
    company: string,
    userId: string,
  }

  export type Result = boolean;
}