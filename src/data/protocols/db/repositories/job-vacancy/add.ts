import { AddJobVacancy } from "@/domain/usecases";

export interface AddJobVacancyRepository {
  add: (jobVacancyData: AddJobVacancyRepository.Params) => Promise<AddJobVacancyRepository.Result>;
}

export namespace AddJobVacancyRepository {
  export type Params = AddJobVacancy.Params;
  export type Result = boolean;
}