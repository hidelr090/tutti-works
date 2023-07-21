import { DbAddUser } from "../../../data";
import { AddUser } from "../../../domain/usecases";
import { BcryptAdapter } from "../../../infra/cryptography";
import { UserSequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbAddUser = (): AddUser => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const userSequelizeRepository = new UserSequelizeRepository();
  return new DbAddUser(bcryptAdapter, userSequelizeRepository, userSequelizeRepository, userSequelizeRepository);
};