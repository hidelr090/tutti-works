import { AddUserRepository, CheckUserByEmailRepository, CheckUserByIdentifierCodeRepository, LoadUserByIdRepository, UpdateUserRepository } from '@/data/protocols';
import { AddUser } from '@/domain/usecases';
import { mockUpdateUserParams } from '@/tests/domain/mocks';

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

export class CheckUserByEmailRepositorySpy implements CheckUserByEmailRepository {
    email = chance.email();
    result = false;

    async findByEmail (email: string): Promise<boolean> {
      this.email = email;
      return this.result;
    }
}

export class UpdateUserRepositorySpy implements UpdateUserRepository {
  data: UpdateUserRepository.Params = mockUpdateUserParams();
  async update (userId: string, data: UpdateUserRepository.Params): Promise<UpdateUserRepository.Result> {
    this.data = data;
  }
}

export class LoadUserByIdRepositorySpy implements LoadUserByIdRepository {
  data: UpdateUserRepository.Params = mockUpdateUserParams();

  async loadById (id: string): Promise<LoadUserByIdRepository.Result> {
    return null;
  }
}




