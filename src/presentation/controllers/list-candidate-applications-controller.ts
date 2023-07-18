import {Controller, HttpResponse} from '@/presentation/protocols';
import {noContent, serverError, ok} from '@/presentation/helpers';
import { ListCandidateApplications } from '@/domain/usecases';

export class ListCandidateApplicationsController implements Controller {
  constructor(
    private readonly listCandidateApplications: ListCandidateApplications
  ){}

  async handle(request: ListCandidateApplicationsController.Request): Promise<HttpResponse>{
    try{
      const jobVacancies = await this.listCandidateApplications.listCandidateApplications(request.candidateId);

      return jobVacancies && jobVacancies.length ? ok(jobVacancies) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace ListCandidateApplicationsController {
  export type Request = {
    candidateId: string
  };
}