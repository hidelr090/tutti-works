import bcrypt from "bcrypt";
import { BcryptAdapter } from "@/infra/cryptography";
import { throwError } from "@/tests/domain/mocks";

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return 'hash';
  },

  async compare () : Promise<boolean> {
    return true;
  }

}));

const salt = 12;

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt);
}

describe ('BcryptAdapter', () => {
  describe('hash()', () => {
    test('Should call hash with correct values', async () => {
      const sut = makeSut();
      
      const hashSpy = jest.spyOn(bcrypt, 'hash');
      
      await sut.hash('any_value');

      expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });

    test('Should return a valid hash on hash success', async ()=> {
      const sut = makeSut();

      const hash = await sut.hash('any_value');
      
      expect(hash).toBe('hash');
    });

    test('Shoud throw if hash throws', async ()=> {
      const sut = makeSut();

      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(throwError);
      
      const promise = sut.hash('any_value');

      await expect(promise).rejects.toThrow();
    })
  });

  describe('compare()', () => {
    test('Should call compare with correct values', async ()=> {
       const sut = makeSut();

       const compareSpy = jest.spyOn(bcrypt, 'compare');

      await sut.compare('any_value', 'any_hash');

      expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash');
    });

  });
})