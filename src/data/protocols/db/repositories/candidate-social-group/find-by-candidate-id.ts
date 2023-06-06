export interface FindSocialGroupsByCandidateIdRepository {
  findByCandidateId: (candidateId: string) => Promise<FindSocialGroupsByCandidateIdRepository.Result>;
}

export namespace FindSocialGroupsByCandidateIdRepository {
  export type Result = string [];
}