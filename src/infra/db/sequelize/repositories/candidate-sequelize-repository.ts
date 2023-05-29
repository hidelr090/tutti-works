import { AddCandidateRepository, CheckCandidateByUserIdRepository, FindCandidateByUserIdRepository } from '@/data/protocols/db/repositories';
import { ShowCandidateProfile } from '@/domain/usecases';
import { Candidate, CandidateSequelizeModel, User, History } from '@/infra/db/sequelize/models';

Candidate.associate();
User.associate();
History.associate();

export class CandidateSequelizeRepository implements AddCandidateRepository, CheckCandidateByUserIdRepository, FindCandidateByUserIdRepository {

  async add(candidateData: AddCandidateRepository.Params) : Promise<AddCandidateRepository.Result>{
    const candidate = await CandidateSequelizeModel.create(candidateData);
    return candidate !== null;
  }

  async checkByUserId (userId: string): Promise<boolean>{
    const candidate = await CandidateSequelizeModel.findOne({ where: { userId }});
    return candidate !== null;
  }

  async findByUserId (userId: string): Promise<ShowCandidateProfile.Result>{
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
}