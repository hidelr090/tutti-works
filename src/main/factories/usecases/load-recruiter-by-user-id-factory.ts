import { DbLoadRecruiterByUserId } from "@/data";
import { LoadRecruiterByUserId } from "@/domain/usecases";
import {RecruiterSequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbLoadRecruiterByUserId = (): LoadRecruiterByUserId => {
  const recruiterRepository = new RecruiterSequelizeRepository();
  return new DbLoadRecruiterByUserId(recruiterRepository);
};