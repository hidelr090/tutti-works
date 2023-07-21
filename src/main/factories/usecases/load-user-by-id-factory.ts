import { DbLoadUserById } from "../../../data";
import { LoadUserById } from "../../../domain/usecases";
import {UserSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbLoadUserById = (): LoadUserById => {
  const userRepository = new UserSequelizeRepository();
  return new DbLoadUserById(userRepository);
};