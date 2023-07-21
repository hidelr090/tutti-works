import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, noContent, serverError } from '../../presentation/helpers';
import { AddJobVacancy } from '../../domain/usecases';

export class AddJobVacancyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addJobVacancy: AddJobVacancy
  ){}

  async handle(request: AddJobVacancyController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      await this.addJobVacancy.add(request);

      return noContent();

    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace AddJobVacancyController {
  export type Request = {
    description: string;
    recruiterId: string;
    title: string;
    company: string;
    wage: number;
    socialGroupsIds: string[];
  }
}