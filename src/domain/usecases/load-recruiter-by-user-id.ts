export interface LoadRecruiterByUserId {
  load: (userId: string) => Promise<LoadRecruiterByUserId.Result | null>
}

export namespace LoadRecruiterByUserId {
  export type Result = {
    id: string;
    userId: string;
    company: string;
  }
}
