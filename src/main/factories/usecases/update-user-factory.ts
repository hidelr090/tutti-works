import { DbUpdateUser } from "../../../data";
import { UpdateUser } from "../../../domain/usecases";
import { UserSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbUpdateUser = (): UpdateUser => {
  const userRepository = new UserSequelizeRepository();
  return new DbUpdateUser(userRepository, userRepository);
};