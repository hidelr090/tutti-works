import { DbUpdateCandidate } from "@/data";
import { UpdateCandidate } from "@/domain/usecases";
import { CandidateSequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbUpdateCandidate = (): UpdateCandidate => {
  const candidateRepository = new CandidateSequelizeRepository();
  return new DbUpdateCandidate(candidateRepository, candidateRepository);
};