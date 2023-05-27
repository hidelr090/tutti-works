import { AddUserRepository } from "@/data";
import { User } from "@/infra/db/sequelize/models";

export class UserSequelizeRepository implements AddUserRepository {
  async add (data: AddUserRepository.Params): Promise<AddUserRepository.Result> {
    const user = await User.create(data);
    return user !== null;
  }

}