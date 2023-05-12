import { AddCandidateJobVacancyRepository } from "@/data/protocols/db/repositories";

export class AddCandidateJobVacancyRepositorySpy implements AddCandidateJobVacancyRepository {
  public params: AddCandidateJobVacancyRepository.Params | undefined;
  public result = true;

  async add (data: AddCandidateJobVacancyRepository.Params): Promise<AddCandidateJobVacancyRepository.Result>{
    this.params = data;
    return this.result;
  }
}