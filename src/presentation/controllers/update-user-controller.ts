import { Controller, HttpResponse, Validation} from '@/presentation/protocols';
import { badRequest, noContent, serverError } from '@/presentation/helpers';
import { UpdateUser } from '@/domain/usecases';

export class UpdateUserController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateUser: UpdateUser
  ){}

  async handle(request: UpdateUserController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.updateUser.update(request.userId, request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace UpdateUserController {
  export type Request = {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    identifierCode?: string;
    phone?: string;
    description?: string;
    linkedIn?: string;
    github?: string;
    instagram?: string;
    accessToken?: string;
    userId: string;
  }
}