import { makeAddRecruiterValidation,  makeDbAddRecruiter } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { AddRecruiterController } from '../../../presentation/controllers'

export const makeAddRecruiterController = (): Controller => {
  return new AddRecruiterController(makeAddRecruiterValidation(), makeDbAddRecruiter());
}
