import { makeDbListJobVacancyApplicants } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { ListJobVacancyApplicantsController } from '@/presentation/controllers'

export const makeListJobVacancyApplicantsController = (): Controller => {
  return new ListJobVacancyApplicantsController(makeDbListJobVacancyApplicants());
}
