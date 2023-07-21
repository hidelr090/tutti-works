import { makeDbListJobVacancyApplicants } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { ListJobVacancyApplicantsController } from '../../../presentation/controllers'

export const makeListJobVacancyApplicantsController = (): Controller => {
  return new ListJobVacancyApplicantsController(makeDbListJobVacancyApplicants());
}
