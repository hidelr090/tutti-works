export interface LoadUserById {
  load: (userId: string) => Promise<LoadUserById.Result | null>
}

export namespace LoadUserById {
  export type Result = {
    id?: string;
    name?: string;
    email?: string;
    identifierCode?: string;
    phone?: string;
    description?: string;
    role?: string;
  }
}
