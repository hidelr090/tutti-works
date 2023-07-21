import { Controller, HttpResponse, Validation} from '../../presentation/protocols';
import { badRequest, serverError, forbidden, ok } from '../../presentation/helpers';
import { EmailInUseError } from '../../presentation/errors';
import { AddUser, Authentication} from '../../domain/usecases'; 

export class AddUserController implements Controller {
  constructor(
    private readonly addUser: AddUser,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle (request: AddUserController.Request): Promise<HttpResponse>{
    try{
      const error = this.validation.validate(request);
      if(error)
        return badRequest(error);

      const { name, email, password, identifierCode, phone, avatarUrl, role, birthDate } = request;

      const isValid = await this.addUser.add(
        {
          name,
          email,
          password,
          role,
          avatarUrl,
          identifierCode,
          phone,
          birthDate
        }
      );

      if(!isValid)
        return forbidden(new EmailInUseError());

      const authenticationModel = await this.authentication.auth({
        email,
        password
      });

      return ok(authenticationModel);
    }catch(error){
      return serverError(error as Error);
    }
  }
}

export namespace AddUserController {
  export type Request = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    identifierCode: string;
    phone: string;
    avatarUrl: string;
    role: number;
    birthDate: Date;
  }
}