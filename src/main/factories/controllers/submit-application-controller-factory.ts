import { makeSubmitApplicationValidation,  makeDbAddCandidateJobVacancy } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { SubmitApplicationController } from '@/presentation/controllers'

export const makeSubmitApplicationController = (): Controller => {
  return new SubmitApplicationController(makeSubmitApplicationValidation(), makeDbAddCandidateJobVacancy());
}
