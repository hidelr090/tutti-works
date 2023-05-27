import { UserSequelizeRepository } from "@/infra/db/sequelize/repositories";
import { mockAddUserParams } from "@/tests/domain/mocks";
import { sequelize } from "@/infra/db/config/sequelize";
import { UserSequelizeModel } from "@/infra/db/sequelize/models";

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

  beforeEach(async () => {
    await UserSequelizeModel.destroy({truncate: true});
  });

  describe('add()', () => {
    test('Should return true on success', async () => {
      const sut = makeSut();
      const addUserParams = mockAddUserParams();
      const isValid = await sut.add(addUserParams);
      expect(isValid).toBe(true);
    });
  });

  describe('loadByEmail()', () => {
    test('Should return a user on success', async () => {
      const sut = makeSut();
      const addUserParams = mockAddUserParams();
      await sut.add(addUserParams);
      const user = await sut.loadByEmail(addUserParams.email);
      expect(user).toBeTruthy();
      expect(user?.id).toBeTruthy();
      expect(user?.name).toBe(addUserParams.name);
      expect(user?.password).toBe(addUserParams.password);
    });

    test('should return null if loadByEmail fails', async () => {
      const sut = makeSut();
      const account = await sut.loadByEmail(mockAddUserParams().email);
      expect(account).toBeFalsy();
    });
  });

  describe('findByEmail()', () => {
    test('should return true if email is valid', async () => {
      const sut = makeSut();
      const addUserParams = mockAddUserParams();
      await sut.add(addUserParams);
      const isValid = await sut.findByEmail(addUserParams.email);
      expect(isValid).toBeTruthy();
    });
  })
});
