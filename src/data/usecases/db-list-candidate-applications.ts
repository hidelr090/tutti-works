import { ListCandidateApplications } from "../../domain/usecases";
import { ListCandidateJobVacanciesRepository } from "../protocols/db/repositories";

export class DbListCandidateApplications implements ListCandidateApplications {
  constructor(
    private readonly listCandidateJobVacanciesRepository: ListCandidateJobVacanciesRepository
  ){}

  async listCandidateApplications (candidateId: string): Promise<ListCandidateApplications.Result>{
    
    const result = await this.listCandidateJobVacanciesRepository.listCandidateJobVacancies(candidateId);
    
    return result;
  }
}