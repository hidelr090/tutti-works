import { AddCandidateJobVacancyRepository } from "@/data/protocols/db/repositories";
import { CandidateJobVacancySequelizeModel } from "@/infra/db/sequelize/models";

export class CandidateJobVacancySequelizeRepository implements AddCandidateJobVacancyRepository{
  async add (data: AddCandidateJobVacancyRepository.Params): Promise<boolean>{
    const added = await CandidateJobVacancySequelizeModel.create(data);

    return added !== null;
  }

}