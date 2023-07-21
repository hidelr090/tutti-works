import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, noContent, serverError } from '../../presentation/helpers';
import { AddRecruiter } from '../../domain/usecases';

export class AddRecruiterController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addRecruiter: AddRecruiter
  ){}

  async handle(request: AddRecruiterController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.addRecruiter.add(request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace AddRecruiterController {
  export type Request = {
    company: string,
    userId: string,
  }
}