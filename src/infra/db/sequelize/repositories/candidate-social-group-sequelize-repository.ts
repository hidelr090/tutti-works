import { AddCandidateSocialGroupsRepository } from "@/data/protocols/db/repositories";
import { CandidateSocialGroupSequelizeModel } from "@/infra/db/sequelize/models";

export class CandidateSocialGroupSequelizeRepository implements AddCandidateSocialGroupsRepository{
  async add (candidateId: string, socialGroupsIds: string[]): Promise<boolean>{
    const added = socialGroupsIds.map(async socialGroupId => await CandidateSocialGroupSequelizeModel.create({
      candidateId,
      socialGroupId
    }));

    return added !== null;
  }

}