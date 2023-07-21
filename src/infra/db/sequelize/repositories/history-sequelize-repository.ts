import { AddHistoryRepository, LoadHistoryByIdRepository, UpdateHistoryRepository } from '../../../../data/protocols/db/repositories';
import { HistorySequelizeModel } from '../models';

export class HistorySequelizeRepository implements AddHistoryRepository, LoadHistoryByIdRepository, UpdateHistoryRepository{
  async add (historyData: AddHistoryRepository.Params): Promise<boolean>{
    const history = await HistorySequelizeModel.create(historyData);
    return history !== null;
  }

  async loadById(id: string): Promise<LoadHistoryByIdRepository.Result>{
    const history = await HistorySequelizeModel.findOne({where: { id }});
    return history; 
  } 

  async update (historyId: string, historyData: UpdateHistoryRepository.Params): Promise<boolean>{
    const history = await HistorySequelizeModel.update(historyData, {where: { id: historyId }});
    return history !==null;
  }
}