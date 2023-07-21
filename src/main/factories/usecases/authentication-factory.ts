import env from '../../config/env'
import { BcryptAdapter, JwtAdapter } from '../../../infra/cryptography'
import { DbAuthentication } from '../../../data/usecases'
import { Authentication } from '../../../domain/usecases'
import { UserSequelizeRepository } from '../../../infra/db/sequelize/repositories'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const userRepository = new UserSequelizeRepository;
  return new DbAuthentication(userRepository, bcryptAdapter, jwtAdapter, userRepository);
}
