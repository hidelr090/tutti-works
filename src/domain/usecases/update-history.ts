export interface UpdateHistory {
  update: (historyId: string, historyData: UpdateHistory.Params) => Promise<UpdateHistory.Result>;
}

export namespace UpdateHistory {
  export type Params = {  
    name: string;
    description: string;
    start: Date;
    end: Date;
    deletedAt?: Date;
  }

  export type Result = boolean;
}