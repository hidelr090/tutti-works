import {Controller, HttpResponse} from '@/presentation/protocols';
import {noContent, serverError, ok} from '@/presentation/helpers';
import { ListJobVacancyApplicants } from '@/domain/usecases';

export class ListJobVacancyApplicantsController implements Controller {
  constructor(
    private readonly listJobVacancyApplicants: ListJobVacancyApplicants
  ){}

  async handle(request: ListJobVacancyApplicantsController.Request): Promise<HttpResponse>{
    try{
      const jobVacancyApplicants = await this.listJobVacancyApplicants.listJobVacancyApplicants(request.jobVacancyId);

      return jobVacancyApplicants ? ok(jobVacancyApplicants) : noContent();
    }catch(err){
      console.error(err);
      return serverError(err as Error);
    }
  }
}

export namespace ListJobVacancyApplicantsController {
  export type Request = {
    jobVacancyId: string
  };
}