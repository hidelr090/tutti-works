import { makeDbListCandidatesByRoleAndSocialGroups } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { SearchForCandidatesController } from '../../../presentation/controllers'

export const makeSearchForCandidatesController = (): Controller => {
  return new SearchForCandidatesController(makeDbListCandidatesByRoleAndSocialGroups());
}
