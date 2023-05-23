export interface AddHistory {
  add: (historyData: AddHistory.Params) => Promise<AddHistory.Result>;
}

export namespace AddHistory {
  export type Params = {
    name: string;
    start: Date;
    end: Date;
    description: string;
    userId: string;
  }

  export type Result = boolean;
}