import { CandidateSequelizeRepository } from '@/infra/db/sequelize/repositories';
import { mockAddCandidateParams } from '@/tests/domain/mocks';
import { sequelize } from '@/infra/db/config/sequelize';
import { CandidateSequelizeModel } from '@/infra/db/sequelize/models';

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
});