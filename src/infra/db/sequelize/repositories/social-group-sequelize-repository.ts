import { FindSocialGroupsByCandidateIdRepository, ListSocialGroupsRepository } from '@/data/protocols/db/repositories';
import { ListSocialGroups } from '@/domain/usecases';
import { SocialGroupSequelizeModel } from '@/infra/db/sequelize/models';

export class SocialGroupSequelizeRepository implements ListSocialGroupsRepository, FindSocialGroupsByCandidateIdRepository {
  async list () :Promise<ListSocialGroupsRepository.Result>{
    const result = await SocialGroupSequelizeModel.findAll();

    return result.map(result => ({
      id: result.id,
      title: result.title,
      description: result.description
    })) || null;
  }

  async findByCandidateId(candidateId: string): Promise<FindSocialGroupsByCandidateIdRepository.Result>{
    const found = await SocialGroupSequelizeModel.findAll({where: { candidateId }});

    return found.map(item => item.id);
  }
}