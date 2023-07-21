import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, noContent, serverError } from '../../presentation/helpers';
import { SubmitApplication } from '../../domain/usecases';

export class SubmitApplicationController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly submitApplication: SubmitApplication
  ){}

  async handle(request: SubmitApplicationController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.submitApplication.submitApplication(request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace SubmitApplicationController {
  export type Request = {
    candidateId: string,
    jobVacancyId: string,
    resumeUrl: string
  };
}