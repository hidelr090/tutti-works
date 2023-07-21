import { makeUpdateJobVacancyValidation,  makeDbUpdateJobVacancy } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { UpdateJobVacancyController } from '../../../presentation/controllers'

export const makeUpdateJobVacancyController = (): Controller => {
  return new UpdateJobVacancyController(makeUpdateJobVacancyValidation(), makeDbUpdateJobVacancy());
}
