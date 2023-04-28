import { UpdateJobVacancy } from "@/domain/usecases";

export interface UpdateJobVacancyRepository {
  add: (jobVacancyData: UpdateJobVacancyRepository.Params) => Promise<UpdateJobVacancyRepository.Result>;
}

export namespace UpdateJobVacancyRepository {
  export type Params = UpdateJobVacancy.Params;
  export type Result = boolean;
}