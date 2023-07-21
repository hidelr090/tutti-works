import {Controller, HttpResponse} from '../../presentation/protocols';
import {noContent, serverError, ok} from '../../presentation/helpers';
import { ListSocialGroups } from '../../domain/usecases';

export class ListSocialGroupsController implements Controller {
  constructor(
    private readonly listSocialGroups: ListSocialGroups
  ){}

  async handle(request: ListSocialGroupsController.Request): Promise<HttpResponse>{
    try{
      const socialGroups = await this.listSocialGroups.listSocialGroups();

      return socialGroups && socialGroups.length ? ok(socialGroups) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace ListSocialGroupsController {
  export type Request = null;
}