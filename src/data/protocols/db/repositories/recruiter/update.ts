import { UpdateRecruiter } from '@/domain/usecases';

export interface UpdateRecruiterRepository {
  update: (recruiterId: string, recruiterData: UpdateRecruiterRepository.Params) => Promise<UpdateRecruiterRepository.Result>;
}

export namespace UpdateRecruiterRepository {
  export type Params = UpdateRecruiter.Params;
  export type Result = boolean;
}