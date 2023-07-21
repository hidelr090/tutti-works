import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, noContent, serverError } from '../../presentation/helpers';
import { UpdateJobVacancy } from '../../domain/usecases';

export class UpdateJobVacancyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateJobVacancy: UpdateJobVacancy
  ){}

  async handle(request: UpdateJobVacancyController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.updateJobVacancy.update(request.jobVacancyId, request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace UpdateJobVacancyController {
  export type Request = {
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    wage: number;
    socialGroupsIds: string[];
    deletedAt: Date;
    jobVacancyId: string;
  }
}