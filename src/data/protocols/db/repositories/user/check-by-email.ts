export interface CheckUserByEmailRepository {
  findByEmail: (email: string) => Promise<CheckUserByEmailRepository.Result>;
}

export namespace CheckUserByEmailRepository {
  export type Result = boolean;
}