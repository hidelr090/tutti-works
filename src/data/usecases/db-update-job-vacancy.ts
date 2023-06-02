import { UpdateJobVacancy } from "@/domain/usecases";
import { UpdateJobVacancyRepository, DeleteJobVacancySocialGroupRepository} from "@/data/protocols/db/repositories";
import { LoadJobVacancyByIdRepository } from "@/data/protocols/db/repositories";
export class DbUpdateJobVacancy implements UpdateJobVacancy {
  constructor(
    private readonly updateJobVacancyRepository: UpdateJobVacancyRepository,
    private readonly loadJobVacancyByIdRepository: LoadJobVacancyByIdRepository,
    private readonly deleteJobVacancySocialGroupRepository: DeleteJobVacancySocialGroupRepository
  ){}

  async update(jobVacancyId: string, data: UpdateJobVacancy.Params): Promise<UpdateJobVacancy.Result> {
    const vacancyToUpdate = await this.loadJobVacancyByIdRepository.loadById(jobVacancyId);
    
    let result = false;

    if (vacancyToUpdate) {
      await this.updateJobVacancyRepository.update(jobVacancyId, { ...vacancyToUpdate, ...data });

      const socialGroups = vacancyToUpdate.socialGroupsIds;

      for (const item of socialGroups) {
        if (!data.socialGroupsIds.includes(item)) {
          await this.deleteJobVacancySocialGroupRepository.delete(jobVacancyId, item);
        }
      }

      result = true;
    }

    return result;
  }
}
