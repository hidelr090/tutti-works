import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, noContent, serverError } from '../../presentation/helpers';
import { UpdateRecruiter } from '../../domain/usecases';

export class UpdateRecruiterController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateRecruiter: UpdateRecruiter
  ){}

  async handle(request: UpdateRecruiterController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.updateRecruiter.update(request.userId, request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace UpdateRecruiterController {
  export type Request = {
    company: string,
    userId: string,
  }
}