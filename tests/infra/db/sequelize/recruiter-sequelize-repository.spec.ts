import { RecruiterSequelizeRepository } from '@/infra/db/sequelize/repositories';
import { mockAddUserParams } from '@/tests/domain/mocks';
import { sequelize } from '@/infra/db/config/sequelize';
import { RecruiterSequelizeModel } from '@/infra/db/sequelize/models';
import { UserSequelizeRepository } from '@/infra/db/sequelize/repositories';

type SutTypes = {
  sut: RecruiterSequelizeRepository,
  userSequelizeRepository: UserSequelizeRepository,
}

const makeSut = (): SutTypes => {
  const sut = new RecruiterSequelizeRepository();
  const userSequelizeRepository = new UserSequelizeRepository();

  return  {
    sut,
    userSequelizeRepository
  }
}

describe('RecruiterSequelizeRepository', ()=> {

  beforeAll(async () => {
    await sequelize.authenticate();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    return true
  }); 

  describe('AddRecruiter()', ()=> {
    test('Should return true on successful insert', async ()=> {
      const { sut, userSequelizeRepository} = makeSut();

      const addUserParams = mockAddUserParams();

      await userSequelizeRepository.add(addUserParams);

      const addedUser = await userSequelizeRepository.loadByEmail(addUserParams.email);

      const isAdded = sut.add({userId: addedUser?.id as string, company: 'My Company'});
      
      expect(isAdded).toBeTruthy();
    });
  });

});
