import { LoadRecruiterByUserId } from '../../domain/usecases'
import { FindRecruiterByUserIdRepository } from '../protocols'

export class DbLoadRecruiterByUserId implements LoadRecruiterByUserId {
  constructor (
    private readonly findRecruiterByUserIdRepository: FindRecruiterByUserIdRepository
  ) {}

  async load (userId: string): Promise<LoadRecruiterByUserId.Result | null> {
    const user  = await this.findRecruiterByUserIdRepository.findByUserId(userId);

    return user || null;
  }
}