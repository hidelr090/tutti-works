import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'
import { EmailValidatorAdapter } from '@/infra/validators'

export const makeUpdateUserValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of [ 'name', 'email', 'identifierCode', 'phone' ]) {
    validations.push(new RequiredFieldValidation(field));
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  return new ValidationComposite(validations);
}