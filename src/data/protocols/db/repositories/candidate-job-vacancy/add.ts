import  { SubmitApplication } from '@/domain/usecases';

export interface AddCandidateJobVacancyRepository {
  add: (data: AddCandidateJobVacancyRepository.Params ) => Promise<AddCandidateJobVacancyRepository.Result>;
}

export namespace AddCandidateJobVacancyRepository {
  export type Params = SubmitApplication.Params;
  export type Result = boolean;
}