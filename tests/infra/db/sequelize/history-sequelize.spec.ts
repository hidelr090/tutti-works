import { HistorySequelizeRepository } from "@/infra/db/sequelize/repositories";
import { mockAddHistoryParams } from '@/tests/domain/mocks';
import { sequelize } from "@/infra/db/config/sequelize";
import { HistorySequelizeModel } from "@/infra/db/sequelize/models";
import { LoadHistoryByIdRepository } from "@/data";

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

  describe('loadById()', () => {
    test('Sould return a history object', async ()=> {
      const sut = makeSut();
      const addHistoryParams = mockAddHistoryParams();
      await sut.add(addHistoryParams);
      const loaded = await HistorySequelizeModel.findOne({where: {userId: addHistoryParams.userId }}) as LoadHistoryByIdRepository.Result;
      const history = await sut.loadById(loaded?.id as string);
      expect(history).toBeTruthy();
      expect(history).toEqual({...loaded});
    });

  });
});