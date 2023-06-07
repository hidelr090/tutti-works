import { makeUpdateCandidateValidation,  makeDbUpdateCandidate } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UpdateCandidateController } from '@/presentation/controllers'

export const makeUpdateCandidateController = (): Controller => {
  return new UpdateCandidateController(makeUpdateCandidateValidation(), makeDbUpdateCandidate());
}
