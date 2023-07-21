import { makeDbListSocialGroups } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { ListSocialGroupsController } from '../../../presentation/controllers'

export const makeListSocialGroupsController = (): Controller => {
  return new ListSocialGroupsController(makeDbListSocialGroups());
}
