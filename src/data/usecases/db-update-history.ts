import { UpdateHistory } from "@/domain/usecases";
import { UpdateHistoryRepository } from "@/data/protocols/db/repositories";
import { LoadHistoryByIdRepository } from "@/data/protocols/db/repositories";

export class DbUpdateHistory implements UpdateHistory {
  constructor(
    private readonly updateHistoryRepository: UpdateHistoryRepository,
    private readonly loadHistoryByIdRepository: LoadHistoryByIdRepository
  ){}

  async update(historyId: string, data: UpdateHistory.Params): Promise<UpdateHistory.Result> {

    const historyToUpdate = await this.loadHistoryByIdRepository.loadById(historyId);
    
    let result = false;

    if(historyToUpdate){
      await this.updateHistoryRepository.update(historyId, { ...historyToUpdate, ...data });
      result = true;
    }

    return result;
  }
}