import { AddJobVacancy } from "../../domain/usecases";
import { AddJobVacancyRepository, AddJobVacancySocialGroupRepository} from "../protocols/db/repositories";
import { v4 } from "uuid";

export class DbAddJobVacancy implements AddJobVacancy{

  constructor(
    private readonly addJobVacancyRepository: AddJobVacancyRepository,
    private readonly addJobVacancySocialGroupRepository: AddJobVacancySocialGroupRepository
  ){}
  
  async add (jobVacancyData: AddJobVacancy.Params): Promise<AddJobVacancy.Result> {
    let result = false;

    const { socialGroupsIds, ...jobVacancyInfos } = jobVacancyData;

    const id = v4();

    await this.addJobVacancyRepository.add({id, ...jobVacancyInfos}).then(() => {
      socialGroupsIds.forEach(async item => {
        await this.addJobVacancySocialGroupRepository.add(id, item);
      });
      result = true;
    });
    
    return result;
  }

}