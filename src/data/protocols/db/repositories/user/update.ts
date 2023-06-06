import  { UpdateUser } from '@/domain/usecases';

export interface UpdateUserRepository {
  update: (userId: string, data: UpdateUserRepository.Params) => Promise<UpdateUserRepository.Result>;
}

export namespace UpdateUserRepository {
  export type Params = UpdateUser.Params;
  export type Result = void;
}