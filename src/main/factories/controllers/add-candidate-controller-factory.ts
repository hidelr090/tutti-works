import { makeAddCandidateValidation,  makeDbAddCandidate } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddCandidateController } from '@/presentation/controllers'

export const makeAddCandidateController = (): Controller => {
  return new AddCandidateController(makeAddCandidateValidation(), makeDbAddCandidate());
}
