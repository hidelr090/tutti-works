import { CandidateSequelizeRepository, HistorySequelizeRepository } from '@/infra/db/sequelize/repositories';
import { mockAddCandidateParams, mockAddUserParams, mockAddHistoryParams} from '@/tests/domain/mocks';
import { sequelize } from '@/infra/db/config/sequelize';
import { CandidateSequelizeModel, HistorySequelizeModel, UserSequelizeModel } from '@/infra/db/sequelize/models';
import { UserSequelizeRepository } from '@/infra/db/sequelize/repositories';
import { ShowCandidateProfile } from '@/domain/usecases';

type SutTypes = {
  sut: CandidateSequelizeRepository;
  userSequelizeRepository: UserSequelizeRepository;
  historySequelizeRepository: HistorySequelizeRepository;
}

const makeSut = (): SutTypes => {
  const sut = new CandidateSequelizeRepository();
  const userSequelizeRepository = new UserSequelizeRepository();
  const historySequelizeRepository = new HistorySequelizeRepository();

  return {
    sut,
    userSequelizeRepository,
    historySequelizeRepository
  };
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
    await UserSequelizeModel.destroy({truncate: true});
    await HistorySequelizeModel.destroy({truncate: true});
  });

  describe('add()', () => {
    test('Should return true on success', async () => {

      const { sut } = makeSut();

      const addCandidateParams = mockAddCandidateParams();

      const isValid = await sut.add(addCandidateParams); 

      expect(isValid).toBeTruthy(); 
    });
  });

  describe('checkByUserId()', () => {
    test('Should return true on success', async () => {
      const { sut, userSequelizeRepository } = makeSut();

      const addUserParams = mockAddUserParams();

      await userSequelizeRepository.add(addUserParams);

      const userFound = await userSequelizeRepository.loadByEmail(addUserParams.email);

      const addCandidateParams = mockAddCandidateParams();

      await sut.add({...addCandidateParams, userId: userFound?.id as string});

      const exists = await sut.checkByUserId(userFound?.id as string);

      expect(exists).toBeTruthy();
    });
  });

  describe('findByEmail', () => {
    test('Should return a candidate with infos', async () => {
      const { sut, userSequelizeRepository, historySequelizeRepository} = makeSut();

      const addUserParams = mockAddUserParams();

      await userSequelizeRepository.add(addUserParams);

      const userFound = await userSequelizeRepository.loadByEmail(addUserParams.email);

      const addCandidateParams = mockAddCandidateParams();

      await sut.add({...addCandidateParams, userId: userFound?.id as string});

      const addHistoryParams = mockAddHistoryParams();

      await historySequelizeRepository.add({...addHistoryParams, userId: userFound?.id as string});

      const exists = await sut.findByUserId(userFound?.id as string);

      const showCandidateProfile = {} as ShowCandidateProfile.Result;
      
      expect(exists).toBeTruthy();
      expect(typeof exists).toBe(typeof showCandidateProfile);
    });
  });
});