export interface SubmitApplication {
  submitApplication: (data :SubmitApplication.Params) => Promise<SubmitApplication.Result>;
}

export namespace SubmitApplication {
  export type Params = {
    candidateId: string,
    jobVacancyId: string,
    resumeUrl: string
  };

  export type Result = boolean;
}