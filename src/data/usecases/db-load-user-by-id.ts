import { LoadUserById } from '@/domain/usecases'
import { LoadUserByIdRepository } from '@/data/protocols'

export class DbLoadUserById implements LoadUserById {
  constructor (
    private readonly loadUserByIdRepository: LoadUserByIdRepository
  ) {}

  async load (userId: string): Promise<LoadUserById.Result | null> {
    const user  = await this.loadUserByIdRepository.loadById(userId);

    return user || null;
  }
}