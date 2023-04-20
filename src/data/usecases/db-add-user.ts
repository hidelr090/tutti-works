import { AddUser } from "@/domain/usecases";
import { AddUserRepository } from "../protocols/db/repositories/user/add";


export class DbAddUser implements AddUser{
  constructor(
    //private readonly hasher: Hasher,
    private readonly addUserRepository: AddUserRepository,
  ){}

  async add (accountData: AddUser.Params): Promise<AddUser.Result>{
    return true;
  }
}