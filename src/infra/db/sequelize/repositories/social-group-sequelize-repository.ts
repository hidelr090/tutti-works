import { ListSocialGroupsRepository } from '@/data/protocols/db/repositories';
import { SocialGroupSequelizeModel } from '@/infra/db/sequelize/models';

export class SocialGroupSequelizeRepository implements ListSocialGroupsRepository {
  async list () :Promise<ListSocialGroupsRepository.Result>{
    const result = await SocialGroupSequelizeModel.findAll();

    return result.map(result => ({
      id: result.id,
      title: result.title,
      description: result.description
    })) || null;
  }

}