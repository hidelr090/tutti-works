import {Controller, HttpResponse} from '../../presentation/protocols';
import {noContent, serverError, ok} from '../../presentation/helpers';
import { LoadUserById } from '../../domain/usecases';

export class LoadUserByIdController implements Controller {
  constructor(
    private readonly loadUserById: LoadUserById
  ){}

  async handle(request: LoadUserByIdController.Request): Promise<HttpResponse>{
    try{
      const user = await this.loadUserById.load(request.userId);

      return user ? ok(user) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace LoadUserByIdController {
  export type Request = {
    userId: string
  };
}