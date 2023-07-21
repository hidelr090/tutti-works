import { ValidationComposite, RequiredFieldValidation } from '../../../validation/validators'
import { Validation } from '../../../presentation/protocols'

export const makeAddRecruiterValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['userId', 'company']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
