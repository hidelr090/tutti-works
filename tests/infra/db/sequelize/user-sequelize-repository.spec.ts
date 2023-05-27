import { UserSequelizeRepository } from "@/infra/db/sequelize/repositories";
import { mockAddUserParams } from "@/tests/domain/mocks";
import { sequelize } from "@/infra/db/config/sequelize";

const makeSut = (): UserSequelizeRepository => {
  return new UserSequelizeRepository();
};

describe('UserSequelizeRepository', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('add()', () => {
    test('Should return true on success', async () => {
      const sut = makeSut();
      const addUserParams = mockAddUserParams();
      const isValid = await sut.add(addUserParams);
      expect(isValid).toBe(true);
    });
  });
});
