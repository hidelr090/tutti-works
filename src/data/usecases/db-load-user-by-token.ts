import { LoadUserByToken } from '../../domain/usecases'
import { Decrypter, LoadUserByTokenRepository } from '../protocols'

export class DbLoadUserByToken implements LoadUserByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadUserByTokenRepository: LoadUserByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<LoadUserByToken.Result | null> {
    let token: string;
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null;
    }
    if (token) {
      const user = await this.loadUserByTokenRepository.loadByToken(accessToken, role)
      if (user) {
        return user;
      }
    }
    return null;
  }
}
