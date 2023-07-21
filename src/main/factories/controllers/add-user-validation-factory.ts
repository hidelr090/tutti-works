import { ValidationComposite, RequiredFieldValidation, CompareFieldsValidation, EmailValidation } from '../../../validation/validators'
import { Validation } from '../../../presentation/protocols'
import { EmailValidatorAdapter } from '../../../infra/validators'

export const makeAddUserValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation', 'identifierCode', 'phone', 'avatarUrl', 'role', 'birthDate']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}