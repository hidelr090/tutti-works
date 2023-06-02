import { AddCandidateRepository, CheckCandidateByUserIdRepository, FindCandidateByUserIdRepository, ListCandidatesByRoleAndSocialGroupsRepository, UpdateCandidateRepository } from '@/data/protocols/db/repositories';
import { SearchForCandidates, ShowCandidateProfile, UpdateCandidate } from '@/domain/usecases';
import { Candidate, CandidateSequelizeModel, User, History, SocialGroup } from '@/infra/db/sequelize/models';
import { Op } from 'sequelize';

Candidate.associate();
SocialGroup.associate();
User.associate();
History.associate();
export class CandidateSequelizeRepository implements 
  AddCandidateRepository, 
  CheckCandidateByUserIdRepository, 
  FindCandidateByUserIdRepository, 
  ListCandidatesByRoleAndSocialGroupsRepository, 
  UpdateCandidateRepository{

  async add(candidateData: AddCandidateRepository.Params) : Promise<AddCandidateRepository.Result>{
    const candidate = await CandidateSequelizeModel.create(candidateData);
    return candidate !== null;
  }

  async checkByUserId (userId: string): Promise<boolean>{
    const candidate = await CandidateSequelizeModel.findOne({ where: { userId }});
    return candidate !== null;
  }

  async findByUserId (userId: string): Promise<FindCandidateByUserIdRepository.Result>{
    const candidate = await CandidateSequelizeModel.findOne({ 
      where: { userId }, 
      include: [ 
        { 
          model: User, 
          as:'user', 
          include: 
          [
            { model: History, as: 'histories' }
          ]
        }
      ]
    }) as Candidate;

    const user = candidate?.user as User;
    const histories = user?.histories as History[];

    return {
      user: {
          id: user.id,
          name: user.name,
          email: user.email,
          identifierCode: user.identifierCode,
          phone: user.phone,
          avatarUrl: user.avatarUrl,
      },
      candidate: {
          id: candidate.id,
          description: candidate.description,
          role: candidate.role
      },
      history: histories.map(history => ({
          id: history.id,
          name:  history.name,
          start: history.start,
          end: history.end,
          description: history.description
      }))
    }
  }

  async listByRoleAndSocialGroups (jobInfos: ListCandidatesByRoleAndSocialGroupsRepository.Params): 
    Promise<ListCandidatesByRoleAndSocialGroupsRepository.Result>{
    
    const candidates = await CandidateSequelizeModel.findAll({
      where: {
        role: {
          [Op.like]: `%${jobInfos.jobInfos}%`,
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          include: [
            {
              model: History,
              as: 'histories',
            }
          ]
        },
        {
          model: SocialGroup,
          as: 'socialGroups',
          where: {
            id: {
              [Op.in]: jobInfos.socialGroupsIds
            }
          }
        }
      ]
    });

    return candidates.map(candidate => ({
      user: {
        id: candidate.user.id,
        name: candidate.user.name,
        email: candidate.user.email,
        identifierCode: candidate.user.identifierCode,
        phone: candidate.user.phone,
        avatarUrl: candidate.user.avatarUrl
      },
      candidate: {
        id: candidate.id,
        description: candidate.description,
        role: candidate.role
      },
      history: candidate.user.histories.map(history => ({
        id: history.id,
        name: history.name,
        start: history.start,
        end: history.end,
        description: history.description
      }))
    }));
  } 

  async update (candidateId: string, candidateData: UpdateCandidateRepository.Params): Promise<boolean>{
    const result = await CandidateSequelizeModel.update(candidateData, {
      where: {
        id: candidateId
      }
    });

    return result !== null;
  }
}