import { AddUser } from "@/domain/usecases";
import { AddUserRepository } from "../protocols/db/repositories/user/add";
import { CheckUserByIdentifierCodeRepository } from "@/data/protocols";
import { Hasher } from "@/data/protocols";


export class DbAddUser implements AddUser{
  constructor(
    private readonly hasher: Hasher,
    private readonly addUserRepository: AddUserRepository,
    private readonly checkUserByIdentifierCodeRepository: CheckUserByIdentifierCodeRepository
  ){}


  async add (userData: AddUser.Params): Promise<AddUser.Result> {
    
    const exists = await this.checkUserByIdentifierCodeRepository.findByIdentifierCode(userData.identifierCode);
    
    let isValid = false;
    
    if (!exists) {

      const hashedPassword = await this.hasher.hash(userData.password);
      
      isValid = await this.addUserRepository.add({ ...userData, password: hashedPassword });
    }

    return isValid;
  }
}