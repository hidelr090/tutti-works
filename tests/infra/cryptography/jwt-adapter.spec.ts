import { JwtAdapter } from '@/infra/cryptography';
import { throwError } from '@/tests/domain/mocks';

import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken', () => ({
  async sign (): Promise<string> {
    return 'any_token';
  },

  async verify(): Promise<string> {
    return 'any_value';
  }
}));

const makeSut = (): JwtAdapter =>{
  return new JwtAdapter('secret');
}

describe('JwtAdapter', () =>{
  describe('sign()', () =>{
    test('Should call sign with correct values', async () =>{
      const sut = makeSut();
      
      const signSpy = jest.spyOn(jwt, 'sign');

      await sut.encrypt('any_id');

      expect(signSpy).toHaveBeenCalledWith({id: 'any_id'}, 'secret');
    });

    test('Should return a token on sign success', async () =>{
      const sut = makeSut();
      
      const accessToken = await sut.encrypt('any_id');

      expect(accessToken).toBe('any_token');
    });

    test('Should throw if sign throws', async () =>{
      const sut = makeSut();
      
      jest.spyOn(jwt, 'sign').mockImplementationOnce(throwError);

      const promise = sut.encrypt('any_id');

      await expect(promise).rejects.toThrow();
    })
  });
})