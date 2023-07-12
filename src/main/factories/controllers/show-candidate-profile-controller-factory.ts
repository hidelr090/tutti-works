import { makeDbShowCandidateProfile } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { ShowCandidateProfileController } from '@/presentation/controllers'

export const makeShowCandidateProfileController = (): Controller => {
  return new ShowCandidateProfileController(makeDbShowCandidateProfile());
}
