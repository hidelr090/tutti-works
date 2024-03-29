import { ValidationComposite, RequiredFieldValidation } from '../../../validation/validators'
import { Validation } from '../../../presentation/protocols'

export const makeUpdateHistoryValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of [ 'name', 'description', 'start', 'end' ]) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}