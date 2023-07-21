import { makeUpdateRecruiterValidation,  makeDbUpdateRecruiter } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { UpdateRecruiterController } from '../../../presentation/controllers'

export const makeUpdateRecruiterController = (): Controller => {
  return new UpdateRecruiterController(makeUpdateRecruiterValidation(), makeDbUpdateRecruiter());
}
