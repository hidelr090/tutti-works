import { AddHistory } from "@/domain/usecases";

export interface AddHistoryRepository {
  add: (historyData: AddHistoryRepository.Params) => Promise<AddHistoryRepository.Result>;
}

export namespace AddHistoryRepository {
  export type Params = AddHistory.Params;
  export type Result = boolean;
}