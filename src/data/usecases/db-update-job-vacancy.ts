import { UpdateJobVacancy } from "@/domain/usecases";
import { UpdateJobVacancyRepository } from "@/data/protocols/db/repositories";
import { LoadJobVacancyByIdRepository } from "@/data/protocols/db/repositories";

export class DbUpdateJobVacancy implements UpdateJobVacancy {
  constructor(
    private readonly updateJobVacancyRepository: UpdateJobVacancyRepository,
    private readonly loadJobVacancyByIdRepository: LoadJobVacancyByIdRepository
  ){}

  async update(jobVacancyId: string, data: UpdateJobVacancy.Params): Promise<UpdateJobVacancy.Result> {

    const vacancyToUpdate = await this.loadJobVacancyByIdRepository.loadById(jobVacancyId);
    
    let result = false;

    if(vacancyToUpdate){
      await this.updateJobVacancyRepository.update(jobVacancyId, { ...vacancyToUpdate, ...data });
      result = true;
    }

    return result;
  }
}