export interface LoadUserByIdRepository {
  loadById: (id: string) => Promise<LoadUserByIdRepository.Result>;
}

export namespace LoadUserByIdRepository {
  export type Result = {
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
}