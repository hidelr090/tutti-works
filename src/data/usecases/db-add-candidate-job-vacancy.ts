import { SubmitApplication } from "@/domain/usecases";
import { AddCandidateJobVacancyRepository } from "@/data/protocols/db/repositories/candidate-job-vacancy";

export class DbAddCandidateJobVacancy implements SubmitApplication{

  constructor(
    private readonly addCandidateJobVacancyRepository: AddCandidateJobVacancyRepository
  ){}
  
  async submitApplication (data: SubmitApplication.Params): Promise<SubmitApplication.Result> {
    return this.addCandidateJobVacancyRepository.add(data); 
  }

}