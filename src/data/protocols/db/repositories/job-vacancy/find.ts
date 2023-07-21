import { FindJobVacancies } from '../../../../../domain/usecases';

export interface FindJobVacanciesRepository {
  find: (data: FindJobVacanciesRepository.Params) => Promise<FindJobVacanciesRepository.Result>;
}

export namespace FindJobVacanciesRepository {
  export type Params = FindJobVacancies.Params;
  export type Result = FindJobVacancies.Result
}