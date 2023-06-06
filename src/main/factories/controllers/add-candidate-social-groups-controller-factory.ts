import { makeDbAddCandidateSocialGroups, makeAddCandidateSocialGroupsValidation } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddCandidateSocialGroupsController } from '@/presentation/controllers/add-candidate-social-group-controller';

export const makeAddCandidateSocialGroupsController = (): Controller => {
  return new AddCandidateSocialGroupsController(makeAddCandidateSocialGroupsValidation(), makeDbAddCandidateSocialGroups());
}
