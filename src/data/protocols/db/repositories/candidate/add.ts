import { AddCandidate } from '@/domain/usecases';

export interface AddCandidateRepository {
  add: (candidateData: AddCandidateRepository.Params) => Promise<AddCandidateRepository.Result>;
}

export namespace AddCandidateRepository {
  export type Params = AddCandidate.Params;
  export type Result = string | null | undefined;
}