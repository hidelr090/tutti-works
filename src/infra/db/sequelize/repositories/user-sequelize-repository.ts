import { AddUserRepository, LoadUserByEmailRepository } from "@/data";
import { UserSequelizeModel } from "@/infra/db/sequelize/models";

export class UserSequelizeRepository implements AddUserRepository, LoadUserByEmailRepository {
  async add (data: AddUserRepository.Params): Promise<AddUserRepository.Result> {
    const user = await UserSequelizeModel.create(data);
    return user !== null;
  }

  async loadByEmail (email: string): Promise<LoadUserByEmailRepository.Result>{
    const user = await UserSequelizeModel.findOne({ where: { email } });

    if(!user){
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      avatarUrl: user.avatarUrl,
      identifierCode: user.identifierCode,
      password: user.password,
    };
  }

}