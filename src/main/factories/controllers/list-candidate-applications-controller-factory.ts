import { makeDbListCandidateApplications } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { ListCandidateApplicationsController } from '@/presentation/controllers'

export const makeListCandidateApplicationsController = (): Controller => {
  return new ListCandidateApplicationsController(makeDbListCandidateApplications());
}
