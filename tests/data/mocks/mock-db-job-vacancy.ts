import { AddJobVacancyRepository, AddJobVacancySocialGroupRepository, DeleteJobVacancySocialGroupRepository, LoadJobVacancyByIdRepository, UpdateJobVacancyRepository } from "@/data/protocols/db/repositories";
import { UpdateJobVacancy } from "@/domain/usecases";

import Chance from 'chance';

export class AddJobVacancyRepositorySpy implements AddJobVacancyRepository {
  public params: AddJobVacancyRepository.Params | undefined;
  public result = true;

  async add (data: AddJobVacancyRepository.Params): Promise<boolean> {
    this.params = data;
    return this.result;
  } 
}

export class UpdateJobVacancyRepositorySpy implements UpdateJobVacancyRepository {
  result = true;
  data: UpdateJobVacancyRepository.Params | undefined;

  async update(jobVacancyId: string, jobVacancyData: UpdateJobVacancyRepository.Params): Promise<boolean>{
    this.data = jobVacancyData;
    return this.result;
  }
}

const chance = new Chance();
export class LoadJobVacancyByIdRepositorySpy implements LoadJobVacancyByIdRepository {
  data = {
    description: 'Vaga de Pedreiro',
    recruiterId: chance.guid(),
    title: 'Pedreiro',
    company: 'Votorantim',
    wage: 56.800,
    socialGroupsIds: [
      chance.guid(),
      chance.guid(),
      chance.guid()
    ],
    deletedAt: new Date()
  };
  async loadById(id: string): Promise<LoadJobVacancyByIdRepository.Result>{
    return {
      id,
      ...this.data
    };
  }
  
}

export class AddJobVacancySocialGroupRepositorySpy implements AddJobVacancySocialGroupRepository {
  async add (jobVacancyId: string, socialGroupId: string): Promise<void>{
    return
  }
}

export class DeleteJobVacancySocialGroupRepositorySpy implements DeleteJobVacancySocialGroupRepository {
  async delete (jobVacancyId: string, socialGroupId: string): Promise<void>{
    return
  }
}