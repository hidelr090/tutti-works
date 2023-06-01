import { CandidateSequelizeRepository, CandidateSocialGroupSequelizeRepository, HistorySequelizeRepository } from '@/infra/db/sequelize/repositories';
import { mockAddCandidateParams, mockAddUserParams, mockAddHistoryParams} from '@/tests/domain/mocks';
import { sequelize } from '@/infra/db/config/sequelize';
import { CandidateSequelizeModel, CandidateSocialGroupSequelizeModel, HistorySequelizeModel, SocialGroup, UserSequelizeModel } from '@/infra/db/sequelize/models';
import { UserSequelizeRepository, SocialGroupSequelizeRepository } from '@/infra/db/sequelize/repositories';
import { ShowCandidateProfile } from '@/domain/usecases';

type SutTypes = {
  sut: CandidateSequelizeRepository;
  userSequelizeRepository: UserSequelizeRepository;
  historySequelizeRepository: HistorySequelizeRepository;
  candidateSocialGroupSequelizeRepository: CandidateSocialGroupSequelizeRepository;
  socialGroupSequelizeRepository: SocialGroupSequelizeRepository;
}

const makeSut = (): SutTypes => {
  const sut = new CandidateSequelizeRepository();
  const userSequelizeRepository = new UserSequelizeRepository();
  const historySequelizeRepository = new HistorySequelizeRepository();
  const candidateSocialGroupSequelizeRepository = new CandidateSocialGroupSequelizeRepository();
  const socialGroupSequelizeRepository = new SocialGroupSequelizeRepository();

  return {
    sut,
    userSequelizeRepository,
    historySequelizeRepository,
    candidateSocialGroupSequelizeRepository,
    socialGroupSequelizeRepository
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
    try {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  
      await CandidateSocialGroupSequelizeModel.destroy({ truncate: true });
      await UserSequelizeModel.destroy({ truncate: true });
      await HistorySequelizeModel.destroy({ truncate: true });
      await CandidateSequelizeModel.destroy({ truncate: true });
  
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    } catch (err) {
      console.error(err);
    }
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

  describe('listByRoleAndSocialGroups()', () => {
    test('Should return a list of candidates by social groups', async () => {
      const { sut, userSequelizeRepository, historySequelizeRepository, candidateSocialGroupSequelizeRepository, socialGroupSequelizeRepository} = makeSut();

      const addUserParams = mockAddUserParams();

      const addCandidateParams = mockAddCandidateParams();

      const addHistoryParams = mockAddHistoryParams();

      await userSequelizeRepository.add(addUserParams);

      const userFound = await userSequelizeRepository.loadByEmail(addUserParams.email);

      await sut.add({...addCandidateParams, userId: userFound?.id as string});

      await historySequelizeRepository.add({...addHistoryParams, userId: userFound?.id as string});

      const candidate = await sut.findByUserId(userFound?.id as string);

      const socialGroups = await socialGroupSequelizeRepository.list();

      await candidateSocialGroupSequelizeRepository.add(candidate.candidate.id as string, socialGroups?.map(item => item.id) as string[]);

      const listedCandidates = await sut.listByRoleAndSocialGroups({jobInfos: candidate.candidate.role, socialGroupsIds: socialGroups?.map(item => item.id) as string[]});

      expect(listedCandidates).toBeTruthy();
    });
  });

  describe('update()', () => {
    test('Should return true on successful update', async ()=> {
      const {sut, userSequelizeRepository } = makeSut();

      const addUserParams = mockAddUserParams();

      const addCandidateParams  = mockAddCandidateParams();

      await userSequelizeRepository.add(addUserParams);

      const userFound = await userSequelizeRepository.loadByEmail(addUserParams.email);

      await sut.add({...addCandidateParams, userId: userFound?.id as string});

      const candidate = await sut.findByUserId(userFound?.id as string);

      const result  = await sut.update(candidate.candidate.id, {...candidate.candidate, role: 'Engenheiro'});

      expect(result).toBeTruthy();
    });
  });
});