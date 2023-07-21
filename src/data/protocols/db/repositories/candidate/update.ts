import { UpdateCandidate } from '../../../../../domain/usecases';

export interface UpdateCandidateRepository {
  update: (candidateId: string, candidateData: UpdateCandidateRepository.Params) => Promise<UpdateCandidateRepository.Result>;
}

export namespace UpdateCandidateRepository {
  export type Params = UpdateCandidate.Params;
  export type Result = boolean;
}