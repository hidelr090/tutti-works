export interface FindRecruiterByUserIdRepository {
  findByUserId: (userId: string) => Promise<FindRecruiterByUserIdRepository.Result>;
}

export namespace FindRecruiterByUserIdRepository {
  export type Result = {
    id: string;
    company: string,
    userId: string,
  } | null;
}