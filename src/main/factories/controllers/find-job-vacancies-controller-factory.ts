import { makeDbFindJobVacancies } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { FindJobVacanciesController } from '../../../presentation/controllers'

export const makeFindJobVacanciesController = (): Controller => {
  return new FindJobVacanciesController(makeDbFindJobVacancies());
}
