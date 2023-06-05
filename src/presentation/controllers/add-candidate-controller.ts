import { Controller, HttpResponse, Validation} from '@/presentation/protocols';
import { badRequest, noContent, serverError } from '@/presentation/helpers';
import { AddCandidate } from '@/domain/usecases';

export class AddCandidateController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addCandidate: AddCandidate
  ){}

  async handle(request: AddCandidateController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.addCandidate.add(request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace AddCandidateController {
  export type Request = {
    userId: string;
    description: string;
    role: string;
  }
}