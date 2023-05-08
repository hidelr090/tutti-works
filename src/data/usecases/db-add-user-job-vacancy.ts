import { SubmitApplication } from "@/domain/usecases";
import { AddUserJobVacancyRepository } from "../protocols/db/repositories/user-job-vacancy";

export class DbAddUserJobVacancy implements SubmitApplication{

  constructor(
    private readonly addUserJobVacancyRepository: AddUserJobVacancyRepository
  ){}
  
  async submitApplication (data: SubmitApplication.Params): Promise<SubmitApplication.Result> {
    return this.addUserJobVacancyRepository.add(data); 
  }

}