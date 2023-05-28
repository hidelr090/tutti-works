import { AddHistoryRepository, LoadHistoryByIdRepository } from '@/data/protocols/db/repositories';
import { AddHistory } from '@/domain/usecases';
import { HistorySequelizeModel } from '@/infra/db/sequelize/models';

export class HistorySequelizeRepository implements AddHistoryRepository{
  async add (historyData: AddHistory.Params): Promise<boolean>{
    const history = await HistorySequelizeModel.create(historyData);
    return history !== null;
  }

}