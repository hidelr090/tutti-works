import { DbAddCandidateSocialGroups } from "@/data";
import { AddCandidateSocialGroups } from "@/domain/usecases";
import { CandidateSocialGroupSequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbAddCandidateSocialGroups = (): AddCandidateSocialGroups => {
  const candidateSocialGroupRepository = new CandidateSocialGroupSequelizeRepository();
  return new DbAddCandidateSocialGroups(candidateSocialGroupRepository, candidateSocialGroupRepository);
};