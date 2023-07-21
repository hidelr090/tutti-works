import { AddCandidateSocialGroupsRepository, FindSocialGroupsByCandidateIdRepository } from "../../../../data/protocols/db/repositories";
import { CandidateSocialGroupSequelizeModel } from "../models";

export class CandidateSocialGroupSequelizeRepository implements AddCandidateSocialGroupsRepository, FindSocialGroupsByCandidateIdRepository{
  async add (candidateId: string, socialGroupsIds: string[]): Promise<boolean>{
    const added = socialGroupsIds.map(async socialGroupId => await CandidateSocialGroupSequelizeModel.create({
      candidateId,
      socialGroupId
    }));

    return added !== null;
  }


  async findByCandidateId(candidateId: string): Promise<FindSocialGroupsByCandidateIdRepository.Result>{
    const found = await CandidateSocialGroupSequelizeModel.findAll({where: { candidateId }});

    return found.map(item => item.socialGroupId);
  }
}