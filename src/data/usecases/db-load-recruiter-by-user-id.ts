import { LoadRecruiterByUserId } from '@/domain/usecases'
import { FindRecruiterByUserIdRepository } from '@/data/protocols'

export class DbLoadRecruiterByUserId implements LoadRecruiterByUserId {
  constructor (
    private readonly findRecruiterByUserIdRepository: FindRecruiterByUserIdRepository
  ) {}

  async load (userId: string): Promise<LoadRecruiterByUserId.Result | null> {
    const user  = await this.findRecruiterByUserIdRepository.findByUserId(userId);

    return user || null;
  }
}