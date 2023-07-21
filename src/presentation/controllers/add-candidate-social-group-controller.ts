import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, noContent, serverError } from '../../presentation/helpers';
import { AddCandidateSocialGroups } from '../../domain/usecases';

export class AddCandidateSocialGroupsController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addCandidateSocialGroupAddCandidateSocialGroups: AddCandidateSocialGroups
  ){}

  async handle(request: AddCandidateSocialGroupsController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.addCandidateSocialGroupAddCandidateSocialGroups.add(request.candidateId, request.socialGroupsIds);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace AddCandidateSocialGroupsController {
  export type Request = {
    candidateId: string; 
    socialGroupsIds: string[];
  }
}