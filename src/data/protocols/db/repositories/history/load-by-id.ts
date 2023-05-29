export interface LoadHistoryByIdRepository {
  loadById: (id: string) => Promise<LoadHistoryByIdRepository.Result>;
}

export namespace LoadHistoryByIdRepository {
  export type Result = {
    id: string;
    name: string;
    start: Date;
    end: Date;
    description: string;
  } | null;
}