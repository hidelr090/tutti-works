import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeUpdateRecruiterValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of [ 'company' ]) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}