import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddJobVacancyValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['description', 'recruiterId', 'title', 'company', 'wage', 'socialGroupsIds']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
