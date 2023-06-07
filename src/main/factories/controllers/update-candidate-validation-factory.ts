import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeUpdateCandidateValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of [ 'description', 'role']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
