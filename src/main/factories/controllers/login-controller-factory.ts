import { makeDbAuthentication, makeLoginValidation } from '../../factories'
import { Controller } from '../../../presentation/protocols'
import { LoginController } from '../../../presentation/controllers'

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication(), makeLoginValidation())
}
