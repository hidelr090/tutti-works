import { UpdateUser } from "@/domain/usecases";
import { UpdateUserRepository, LoadUserByIdRepository } from "@/data/protocols/db/repositories";

export class DbUpdateUser implements UpdateUser {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly loadUserByIdRepository: LoadUserByIdRepository
  ){}

  async update(userId: string, data: UpdateUser.Params): Promise<UpdateUser.Result> {

    const userToUpdate = await this.loadUserByIdRepository.loadById(userId);
    
    let result = false;

    if(userToUpdate){
      await this.updateUserRepository.update(userId, { ...userToUpdate, ...data });
      result = true;
    }

    return result;
  }
}