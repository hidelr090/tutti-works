import { EmailValidatorAdapter } from "./email-validator-adapter";

import validator from "validator";

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true;
  }
}));

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter();
}

describe('EmailValidatorAdapter', () => {

  test('Should return false if validator returns false', () => {
    const sut = makeSut();

    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);

    const isValid = sut.isValid('invalid_email');

    expect(isValid).toBeFalsy();
    
  });

});