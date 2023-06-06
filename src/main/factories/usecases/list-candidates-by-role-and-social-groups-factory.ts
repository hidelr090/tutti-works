import { DbListCandidatesByRoleAndSocialGroups } from "@/data";
import { SearchForCandidates } from "@/domain/usecases";
import { CandidateSequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbListCandidatesByRoleAndSocialGroups = (): SearchForCandidates => {
  const candidateRepository = new CandidateSequelizeRepository();
  return new DbListCandidatesByRoleAndSocialGroups(candidateRepository);
};