import { AddJobVacancy } from "@/domain/usecases";
import { AddJobVacancyRepository } from "@/data/protocols/db/repositories";

export class DbAddJobVacancy implements AddJobVacancy{

  constructor(
    private readonly addJobVacancyRepository: AddJobVacancyRepository
  ){}
  
  async add (jobVacancyData: AddJobVacancy.Params): Promise<AddJobVacancy.Result> {
    return this.addJobVacancyRepository.add(jobVacancyData); 
  }

}