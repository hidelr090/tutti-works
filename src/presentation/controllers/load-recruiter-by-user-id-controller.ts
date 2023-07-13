import {Controller, HttpResponse} from '@/presentation/protocols';
import {noContent, serverError, ok} from '@/presentation/helpers';
import { LoadRecruiterByUserId } from '@/domain/usecases';

export class LoadRecruiterByUserIdController implements Controller {
  constructor(
    private readonly loadRecruiterByUserId: LoadRecruiterByUserId
  ){}

  async handle(request: LoadRecruiterByUserIdController.Request): Promise<HttpResponse>{
    try{
      const user = await this.loadRecruiterByUserId.load(request.userId);

      return user ? ok(user) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace LoadRecruiterByUserIdController {
  export type Request = {
    userId: string
  };
}