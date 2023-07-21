import { AddRecruiter } from '../../../../../domain/usecases';

export interface AddRecruiterRepository {
  add: (recruiterData: AddRecruiterRepository.Params) => Promise<AddRecruiterRepository.Result>;
}

export namespace AddRecruiterRepository {
  export type Params = AddRecruiter.Params;
  export type Result = boolean;
}