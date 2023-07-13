import { makeDbLoadRecruiterByUserId } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadRecruiterByUserIdController } from '@/presentation/controllers'

export const makeLoadRecruiterByUserIdController = (): Controller => {
  return new LoadRecruiterByUserIdController(makeDbLoadRecruiterByUserId());
}
