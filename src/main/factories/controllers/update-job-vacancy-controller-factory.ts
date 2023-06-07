import { makeUpdateJobVacancyValidation,  makeDbUpdateJobVacancy } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UpdateJobVacancyController } from '@/presentation/controllers'

export const makeUpdateJobVacancyController = (): Controller => {
  return new UpdateJobVacancyController(makeUpdateJobVacancyValidation(), makeDbUpdateJobVacancy());
}
