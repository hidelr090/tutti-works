import { ListCandidateApplications } from "@/domain/usecases";
import { ListCandidateApplicationsRepository } from "../protocols/db/repositories";

export class DbListCandidateApplications implements ListCandidateApplications {
  constructor(
    private readonly listCandidateApplicationsRepository: ListCandidateApplicationsRepository
  ){}

  async listCandidateApplications (candidateId: string): Promise<ListCandidateApplications.Result>{
    
    const result = await this.listCandidateApplicationsRepository.listCandidateApplications(candidateId);
    
    return result;
  }
}