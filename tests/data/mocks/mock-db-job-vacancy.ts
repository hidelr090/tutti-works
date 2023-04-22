import { AddJobVacancyRepository } from "@/data/protocols/db/repositories";

export class AddJobVacancyRepositorySpy implements AddJobVacancyRepository {
  public params: AddJobVacancyRepository.Params | undefined;
  public result = true;

  async add (data: AddJobVacancyRepository.Params): Promise<boolean> {
    this.params = data;
    return this.result;
  } 
}