import { FindJobVacancies } from '@/domain/usecases';
import { FindJobVacanciesRepository } from '@/data/protocols/db/repositories';

export class DbFindJobVacancies implements FindJobVacancies {
  constructor (
    private readonly findJobVacanciesRepository: FindJobVacanciesRepository
  ){}

  async findJobVacancies (jobInfos: FindJobVacancies.Params): Promise<FindJobVacancies.Result>{
    
    const result = await this.findJobVacanciesRepository.find(jobInfos);

    return result;
  }
}
