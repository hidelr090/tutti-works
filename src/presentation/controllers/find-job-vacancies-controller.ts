import {Controller, HttpResponse} from '@/presentation/protocols';
import {noContent, serverError, ok} from '@/presentation/helpers';
import { FindJobVacancies } from '@/domain/usecases';

export class FindJobVacanciesController implements Controller {
  constructor(
    private readonly findJobVacancies: FindJobVacancies
  ){}

  async handle(request: FindJobVacanciesController.Request): Promise<HttpResponse>{
    try{
      const jobVacancies = await this.findJobVacancies.findJobVacancies(request);

      return jobVacancies && jobVacancies.length ? ok(jobVacancies) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace FindJobVacanciesController {
  export type Request = {
    jobInfos: string;
    socialGroupsIds: string[];
  };
}