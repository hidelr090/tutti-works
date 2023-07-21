import { AddHistory } from "../../domain/usecases";
import { AddHistoryRepository } from "../protocols/db/repositories";

export class DbAddHistory implements AddHistory{

  constructor(
    private readonly addHistoryRepository: AddHistoryRepository
  ){}
  
  async add (historyData: AddHistory.Params): Promise<AddHistory.Result> {
    return this.addHistoryRepository.add(historyData); 
  }

}