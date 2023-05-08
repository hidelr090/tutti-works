import  { SubmitApplication } from '@/domain/usecases';

export interface AddUserJobVacancyRepository {
  add: (data: AddUserJobVacancyRepository.Params ) => Promise<AddUserJobVacancyRepository.Result>;
}

export namespace AddUserJobVacancyRepository {
  export type Params = SubmitApplication.Params;
  export type Result = boolean;
}