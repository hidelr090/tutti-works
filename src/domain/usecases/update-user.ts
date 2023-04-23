export interface UpdateUser {
  update: (userId: string,data: UpdateUser.Params) => Promise<UpdateUser.Result>;
}

export namespace UpdateUser {
  export type Params = {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    identifierCode?: string;
    phone?: string;
    description?: string;
    linkedIn?: string;
    github?: string;
    instagram?: string;
  };

  export type Result = boolean;
}