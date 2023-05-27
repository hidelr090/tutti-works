import { AddUserRepository, CheckUserByEmailRepository, LoadUserByEmailRepository } from "@/data";
import { UserSequelizeModel } from "@/infra/db/sequelize/models";

export class UserSequelizeRepository implements AddUserRepository, LoadUserByEmailRepository, CheckUserByEmailRepository {
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

  async findByEmail (email: string): Promise<boolean>{
    const user = await UserSequelizeModel.findOne({ where: { email } });

    return user !== null;
  }
}