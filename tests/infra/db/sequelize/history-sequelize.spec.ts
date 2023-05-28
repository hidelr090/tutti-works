import { HistorySequelizeRepository } from "@/infra/db/sequelize/repositories";
import { mockAddHistoryParams } from '@/tests/domain/mocks';
import { sequelize } from "@/infra/db/config/sequelize";
import { HistorySequelizeModel } from "@/infra/db/sequelize/models";

const makeSut = (): HistorySequelizeRepository => {
  return new HistorySequelizeRepository();
}

describe('HistorySequelizeRepository', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    await HistorySequelizeModel.destroy({truncate: true});
  });

  describe('add()', () => {
    test('Shoud return true on success', async ()=> {
      const sut = makeSut();
      const addHistoryParams = mockAddHistoryParams();
      const isValid = await sut.add(addHistoryParams);
      expect(isValid).toBeTruthy();
    });
  });
});