import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddHistoryValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'start', 'end', 'description', 'userId']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
