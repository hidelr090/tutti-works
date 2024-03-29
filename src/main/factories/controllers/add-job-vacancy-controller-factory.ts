import { makeAddJobVacancyValidation,  makeDbAddJobVacancy } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { AddJobVacancyController } from '../../../presentation/controllers'

export const makeAddJobVacancyController = (): Controller => {
  return new AddJobVacancyController(makeAddJobVacancyValidation(), makeDbAddJobVacancy());
}

