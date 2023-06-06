import {Controller, HttpResponse} from '@/presentation/protocols';
import { serverError, ok, notFound} from '@/presentation/helpers';
import { ShowCandidateProfile } from '@/domain/usecases';

export class ShowCandidateProfileController implements Controller {
  constructor(
    private readonly showCandidateProfile: ShowCandidateProfile
  ){}

  async handle(request: ShowCandidateProfileController.Request): Promise<HttpResponse>{
    try{
      const profile = await this.showCandidateProfile.showCandidateProfile(request);
      
      if(!profile)
        return notFound(new Error(`
          Candidate profile with id ${request} is not found
        `));

      return ok(profile);
    }catch(err){
      return serverError(err as Error);
    }
  }
}

export namespace ShowCandidateProfileController {
  export type Request = string;
}