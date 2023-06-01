import { ListRecruiterJobVacancies } from "@/domain/usecases";

export interface ListJobVacanciesByRecruiterIdRepository {
  listByRecruiterId: (recruiterId: string) => Promise<ListJobVacanciesByRecruiterIdRepository.Result>;
}

export namespace ListJobVacanciesByRecruiterIdRepository {
  export type Result = ListRecruiterJobVacancies.Result;
}

