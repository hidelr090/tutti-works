import { CandidateSequelizeRepository } from '@/infra/db/sequelize/repositories';
import { mockAddCandidateParams, mockAddUserParams } from '@/tests/domain/mocks';
import { sequelize } from '@/infra/db/config/sequelize';
import { CandidateSequelizeModel } from '@/infra/db/sequelize/models';
import { UserSequelizeRepository } from '@/infra/db/sequelize/repositories';

const makeSut = (): CandidateSequelizeRepository => {
  return new CandidateSequelizeRepository();
}

describe('CandidateSequelizeRepository', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    await CandidateSequelizeModel.destroy({truncate: true});
  });

  describe('add()', () => {
    test('Should return true on success', async () => {
      const sut = makeSut();
      const addCandidateParams = mockAddCandidateParams();
      const isValid = await sut.add(addCandidateParams); 
      expect(isValid).toBeTruthy(); 
    });
  });

  describe('checkByUserId()', () => {
    test('Should return true on success', async () => {
      const sut = makeSut();
      const addUserParams = mockAddUserParams();
      const userRepository = new UserSequelizeRepository();
      await userRepository.add(addUserParams);
      const userFound = await userRepository.loadByEmail(addUserParams.email);
      const addCandidateParams = mockAddCandidateParams();
      await sut.add({...addCandidateParams, userId: userFound?.id as string});
      const exists = await sut.checkByUserId(userFound?.id as string);
      expect(exists).toBeTruthy();
    });
  });
});