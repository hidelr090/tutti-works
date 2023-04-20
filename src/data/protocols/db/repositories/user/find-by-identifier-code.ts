export interface FindUserByIdentifierCodeRepository {
  findByIdentifierCode: (identifierCode: string) => Promise<FindUserByIdentifierCodeRepository.Result>;
}

export namespace FindUserByIdentifierCodeRepository {
  export type Result = boolean;
}