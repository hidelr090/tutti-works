import { makeUpdateCandidateValidation,  makeDbUpdateCandidate } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { UpdateCandidateController } from '../../../presentation/controllers'

export const makeUpdateCandidateController = (): Controller => {
  return new UpdateCandidateController(makeUpdateCandidateValidation(), makeDbUpdateCandidate());
}
