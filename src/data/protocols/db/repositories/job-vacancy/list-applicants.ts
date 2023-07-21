import { ListJobVacancyApplicants } from '../../../../../domain/usecases';

export interface ListJobVacancyApplicantsRepository {
  listJobVacancyApplicants: (jobVacancyId: string) => Promise<ListJobVacancyApplicantsRepository.Result>;
}

export namespace ListJobVacancyApplicantsRepository {
  export type Result = ListJobVacancyApplicants.Result;
}

