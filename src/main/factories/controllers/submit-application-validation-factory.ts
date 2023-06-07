import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeSubmitApplicationValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['candidateId', 'jobVacancyId', 'resumeUrl']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
