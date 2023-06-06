import { DbListCandidateApplications } from "@/data";
import { ListCandidateApplications } from "@/domain/usecases";
import { CandidateSequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbListCandidateApplications = (): ListCandidateApplications => {
  const candidateRepository = new CandidateSequelizeRepository();
  return new DbListCandidateApplications(candidateRepository);
};