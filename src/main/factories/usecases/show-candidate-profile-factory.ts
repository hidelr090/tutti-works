import { DbFindCandidateProfile } from "../../../data";
import { ShowCandidateProfile } from "../../../domain/usecases";
import { CandidateSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbShowCandidateProfile = (): ShowCandidateProfile => {
  const candidateRepository = new CandidateSequelizeRepository();
  return new DbFindCandidateProfile(candidateRepository);
};