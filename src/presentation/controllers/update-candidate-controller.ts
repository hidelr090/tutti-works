import { Controller, HttpResponse, Validation} from '@/presentation/protocols';
import { badRequest, noContent, serverError } from '@/presentation/helpers';
import { UpdateCandidate } from '@/domain/usecases';

export class UpdateCandidateController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateCandidate: UpdateCandidate
  ){}

  async handle(request: UpdateCandidateController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.updateCandidate.update(request.userId, request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace UpdateCandidateController {
  export type Request = {
    userId: string;
    description: string;
    role: string;
  }
}