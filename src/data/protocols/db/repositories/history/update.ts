import { UpdateHistory } from '../../../../../domain/usecases';

export interface UpdateHistoryRepository {
  update: (historyId: string, historyData: UpdateHistoryRepository.Params) => Promise<UpdateHistoryRepository.Result>;
}

export namespace UpdateHistoryRepository {
  export type Params = UpdateHistory.Params;
  export type Result = boolean;
}