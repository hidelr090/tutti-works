import {Controller, HttpResponse} from '../../presentation/protocols';
import {noContent, serverError, ok} from '../../presentation/helpers';
import { SearchForCandidates } from '../../domain/usecases';

export class SearchForCandidatesController implements Controller {
  constructor(
    private readonly searchForCandidates: SearchForCandidates
  ){}

  async handle(request: SearchForCandidatesController.Request): Promise<HttpResponse>{
    try{
      const jobVacancies = await this.searchForCandidates.searchForCandidates(request);

      return jobVacancies && jobVacancies.length ? ok(jobVacancies) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace SearchForCandidatesController {
  export type Request = {
    jobInfos: string;
    socialGroupsIds: string[];
  };
}