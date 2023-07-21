import { DbAddCandidate } from "../../../data";
import { AddCandidate } from "../../../domain/usecases";
import { CandidateSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbAddCandidate = (): AddCandidate => {
  const candidateSequelizeRepository = new CandidateSequelizeRepository();
  return new DbAddCandidate(candidateSequelizeRepository, candidateSequelizeRepository);
};