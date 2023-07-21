import { DbAddRecruiter } from "../../../data";
import { AddRecruiter } from "../../../domain/usecases";
import { RecruiterSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbAddRecruiter = (): AddRecruiter => {
  const recruiterRepository = new RecruiterSequelizeRepository();
  return new DbAddRecruiter(recruiterRepository, recruiterRepository);
};