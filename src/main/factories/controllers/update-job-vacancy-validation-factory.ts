import { ValidationComposite, RequiredFieldValidation } from '../../../validation/validators'
import { Validation } from '../../../presentation/protocols'

export const makeUpdateJobVacancyValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of [ 'title', 'description', 'company', 'wage', 'socialGroupsIds' ]) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}