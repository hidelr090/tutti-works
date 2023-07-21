import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, noContent, serverError } from '../../presentation/helpers';
import { AddHistory } from '../../domain/usecases';

export class AddHistoryController implements Controller {
  constructor(
    private readonly validation: Validation, 
    private readonly addHistory: AddHistory
  ){}

  async handle (request: AddHistoryController.Request): Promise<HttpResponse>{
    try {
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.addHistory.add(request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace AddHistoryController {
  export type Request = {
    name: string;
    start: Date;
    end: Date;
    description: string;
    userId: string;
  }
}