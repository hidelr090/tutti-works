export interface AddUser {
  add: (user: AddUser.Params) => Promise<AddUser.Result>;
}

export namespace AddUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
    phone: string;
  }

  export type Result = boolean;
}