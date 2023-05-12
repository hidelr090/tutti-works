export interface AddUser {
  add: (user: AddUser.Params) => Promise<AddUser.Result>;
}

export namespace AddUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
    identifierCode: string;
    phone: string;
    avatarUrl: string;
  }

  export type Result = boolean;
}