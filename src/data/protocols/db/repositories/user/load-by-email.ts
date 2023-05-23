export interface LoadUserByEmailRepository {
  loadByEmail: (email: string) => Promise<LoadUserByEmailRepository.Result>;
}

export namespace LoadUserByEmailRepository {
  export type Result = {
    id: string;
    name: string;
    email: string;
    password: string;
    identifierCode: string;
    phone: string;
    avatarUrl: string;
  };
}