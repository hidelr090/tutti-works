import { AddUserRepository, CheckUserByIdentifierCodeRepository } from '@/data/protocols';
import { AddUser } from '@/domain/usecases';

import Chance from 'chance';

const chance = new Chance();

export class AddUserRepositorySpy implements AddUserRepository {
  public params: AddUserRepository.Params | undefined;
  result = true;

  async add (data: AddUser.Params): Promise<boolean>{
    this.params = data;
    return this.result;
  }
}

export class CheckUserByIdentifierCodeRepositorySpy implements CheckUserByIdentifierCodeRepository{
  identifierCode = chance.guid(); 
  result = false;

  async findByIdentifierCode (identifierCode: string): Promise<boolean> {
    this.identifierCode = identifierCode;
    return this.result;
  }
}



