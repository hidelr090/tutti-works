import { makeDbListRecruiterJobVacancies } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { ListRecruiterJobVacanciesController } from '../../../presentation/controllers'

export const makeListRecruiterJobVacanciesController = (): Controller => {
  return new ListRecruiterJobVacanciesController(makeDbListRecruiterJobVacancies());
}
