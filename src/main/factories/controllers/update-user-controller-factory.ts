import { makeUpdateUserValidation,  makeDbUpdateUser } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { UpdateUserController } from '../../../presentation/controllers'

export const makeUpdateUserController = (): Controller => {
  return new UpdateUserController(makeUpdateUserValidation(), makeDbUpdateUser());
}
