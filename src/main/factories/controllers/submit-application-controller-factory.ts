import { makeSubmitApplicationValidation,  makeDbAddCandidateJobVacancy } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { SubmitApplicationController } from '../../../presentation/controllers'

export const makeSubmitApplicationController = (): Controller => {
  return new SubmitApplicationController(makeSubmitApplicationValidation(), makeDbAddCandidateJobVacancy());
}
