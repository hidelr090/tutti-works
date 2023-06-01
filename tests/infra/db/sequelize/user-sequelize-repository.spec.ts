import { UserSequelizeRepository } from "@/infra/db/sequelize/repositories";
import { mockAddUserParams } from "@/tests/domain/mocks";
import { sequelize } from "@/infra/db/config/sequelize";
import { UserSequelizeModel } from "@/infra/db/sequelize/models";
import Chance from "chance";

const chance = new Chance();

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
    try {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
      
      await UserSequelizeModel.destroy({ truncate: true });
  
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    } catch (err) {
      console.error(err);
    }
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

    test('should return false if email is invalid', async () => {
      const sut = makeSut();
      const isValid = await sut.findByEmail(mockAddUserParams().email);
      expect(isValid).toBeFalsy();
    });
  });

  describe('loadById()', () => {
    test('should return a user if it exists', async () => {
      const sut = makeSut();
      const addUserParams = mockAddUserParams();
      await sut.add(addUserParams);
      const result = await sut.loadByEmail(addUserParams.email);
      const user = await sut.loadById(result?.id as string);
      expect(user).toBeTruthy();
      expect(user?.id).toBeTruthy();
      expect(user?.name).toBe(addUserParams.name);
      expect(user?.password).toBe(addUserParams.password);
    });

    test('should return false if email is invalid', async () => {
      const sut = makeSut();
      const isValid = await sut.loadById('invalid_id');
      expect(isValid).toBeFalsy();
    });
  });

  describe('updateAccessToken', () => {
    test('should update access token', async () => {
      const randomAccessToken = chance.string();
      const sut = makeSut();
      const addUserParams = mockAddUserParams();
      await sut.add(addUserParams);
      const insertedUser = await sut.loadByEmail(addUserParams.email);
      await sut.updateAccessToken(insertedUser?.id as string, randomAccessToken);
      const updatedUser = await sut.loadByToken(randomAccessToken);
      expect(updatedUser).toBeTruthy();
      expect(updatedUser?.id).toBe(insertedUser?.id);
    })
  });

});
