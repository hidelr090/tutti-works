import { ListJobVacancyApplicants } from "../../domain/usecases";
import { ListJobVacancyApplicantsRepository } from "../protocols/db/repositories";

export class DbListJobVacancyApplicants implements ListJobVacancyApplicants {
  constructor (
    private readonly listJobVacancyApplicantsRepository: ListJobVacancyApplicantsRepository
  ){}

  async listJobVacancyApplicants (jobInfos: string): Promise<ListJobVacancyApplicants.Result>{
    
    const result = await this.listJobVacancyApplicantsRepository.listJobVacancyApplicants(jobInfos);

    return result;
  }
}