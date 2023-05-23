export interface LoadHistoryByIdRepository {
  loadById: (id: string) => Promise<LoadHistoryByIdRepository.Result>;
}

export namespace LoadHistoryByIdRepository {
  export type Result = {
    name: string;
    start: Date;
    end: Date;
    description: string;
  } | null;
}