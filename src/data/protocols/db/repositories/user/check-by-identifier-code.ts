export interface CheckUserByIdentifierCodeRepository {
  findByIdentifierCode: (identifierCode: string) => Promise<CheckUserByIdentifierCodeRepository.Result>;
}

export namespace CheckUserByIdentifierCodeRepository {
  export type Result = boolean;
}