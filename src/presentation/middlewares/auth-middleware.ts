import { HttpResponse, Middleware } from "@/presentation/protocols";
import { forbidden, ok, serverError } from '@/presentation/helpers';
import { AccessDeniedError } from "@/presentation/errors";
import { LoadUserByToken } from '@/domain/usecases';

export class AuthMiddleware implements Middleware {
  constructor(
    private readonly loadUserByToken: LoadUserByToken,
    private readonly role?: number
  ){}

  async handle (httpRequest: any): Promise<HttpResponse>{
    try{
      const { accessToken } = httpRequest;
      if(accessToken){
        const user = await this.loadUserByToken.load(accessToken);
        if (user)
          return ok({ userId: user.id });
      }
      return forbidden(new AccessDeniedError());
    } catch (error){
      const err: Error = error as Error;
      return serverError(err);
    }
  }
}