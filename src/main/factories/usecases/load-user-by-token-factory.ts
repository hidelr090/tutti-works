import env from '../../config/env'
import { DbLoadUserByToken } from "../../../data";
import { LoadUserByToken } from "../../../domain/usecases";
import {UserSequelizeRepository } from "../../../infra/db/sequelize/repositories";
import { JwtAdapter } from '../../../infra/cryptography';

export const makeDbLoadUserByToken = (): LoadUserByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const userRepository = new UserSequelizeRepository();
  return new DbLoadUserByToken(jwtAdapter, userRepository);
};