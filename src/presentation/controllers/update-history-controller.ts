import { Controller, HttpResponse, Validation} from '@/presentation/protocols';
import { badRequest, noContent, serverError } from '@/presentation/helpers';
import { UpdateHistory } from '@/domain/usecases';

export class UpdateHistoryController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateHistory: UpdateHistory
  ){}

  async handle(request: UpdateHistoryController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.updateHistory.update(request.historyId, request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace UpdateHistoryController {
  export type Request = {
    historyId: string;
    name?: string;
    description?: string;
    start?: Date;
    end?: Date;
    deletedAt?: Date;
  }
}