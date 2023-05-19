export interface UpdateRecruiter {
  update: (recruiterId: string,data: UpdateRecruiter.Params) => Promise<UpdateRecruiter.Result>;
}

export namespace UpdateRecruiter {
  export type Params = {
    company: string,
    userId: string,
  };

  export type Result = boolean;
}