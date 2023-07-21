import { DbUpdateRecruiter } from "../../../data";
import { UpdateRecruiter } from "../../../domain/usecases";
import { RecruiterSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbUpdateRecruiter = (): UpdateRecruiter => {
  const recruiterRepository = new RecruiterSequelizeRepository();
  return new DbUpdateRecruiter(recruiterRepository, recruiterRepository);
};