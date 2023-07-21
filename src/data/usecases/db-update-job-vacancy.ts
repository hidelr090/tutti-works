import { UpdateJobVacancy } from "../../domain/usecases";
import { UpdateJobVacancyRepository, DeleteJobVacancySocialGroupRepository, AddJobVacancySocialGroupRepository} from "../protocols/db/repositories";
import { LoadJobVacancyByIdRepository } from "../protocols/db/repositories";
export class DbUpdateJobVacancy implements UpdateJobVacancy {
  constructor(
    private readonly updateJobVacancyRepository: UpdateJobVacancyRepository,
    private readonly loadJobVacancyByIdRepository: LoadJobVacancyByIdRepository,
    private readonly deleteJobVacancySocialGroupRepository: DeleteJobVacancySocialGroupRepository,
    private readonly addJobVacancySocialGroupRepository: AddJobVacancySocialGroupRepository
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

      for (const item of data.socialGroupsIds) {
        if (!socialGroups.includes(item)) {
          await this.addJobVacancySocialGroupRepository.add(jobVacancyId, item);
        }
      }
      
      result = true;
    }

    return result;
  }
}
