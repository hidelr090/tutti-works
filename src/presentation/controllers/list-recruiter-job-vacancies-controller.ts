import {Controller, HttpResponse} from '@/presentation/protocols';
import {noContent, serverError, ok} from '@/presentation/helpers';
import { ListRecruiterJobVacancies } from '@/domain/usecases';

export class ListRecruiterJobVacanciesController implements Controller {
  constructor(
    private readonly listRecruiterJobVacancies: ListRecruiterJobVacancies
  ){}

  async handle(request: ListRecruiterJobVacanciesController.Request): Promise<HttpResponse>{
    try{
      const jobVacancies = await this.listRecruiterJobVacancies.listRecruiterJobVacancies(request);

      return jobVacancies && jobVacancies.length ? ok(jobVacancies) : noContent();
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace ListRecruiterJobVacanciesController {
  export type Request = string;
}