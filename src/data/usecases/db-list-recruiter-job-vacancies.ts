import { ListRecruiterJobVacancies } from "@/domain/usecases";
import { ListJobVacanciesByRecruiterIdRepository } from "@/data/protocols/db/repositories";

export class DbListRecruiterJobVacancies implements ListRecruiterJobVacancies {
  constructor (
    private readonly listJobVacanciesByRecruiterIdRepository: ListJobVacanciesByRecruiterIdRepository
  ){}

  async listRecruiterJobVacancies (recruiterId: string): Promise<ListRecruiterJobVacancies.Result>{

    const result = await this.listJobVacanciesByRecruiterIdRepository.listByRecruiterId(recruiterId);
    
    return result;
  }
}