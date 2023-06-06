import { AddUserRepository, CheckUserByEmailRepository, LoadUserByEmailRepository, LoadUserByIdRepository, LoadUserByTokenRepository, UpdateAccessTokenRepository, CheckUserByIdentifierCodeRepository, UpdateUserRepository} from "@/data";
import { UserSequelizeModel } from "@/infra/db/sequelize/models";

export class UserSequelizeRepository implements AddUserRepository, LoadUserByEmailRepository, CheckUserByEmailRepository, LoadUserByIdRepository, UpdateAccessTokenRepository, LoadUserByTokenRepository, CheckUserByIdentifierCodeRepository, UpdateUserRepository{
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

  async loadById (id: string): Promise<LoadUserByIdRepository.Result>{
    const user = await UserSequelizeModel.findOne({ where: { id } });
    return user ? user: null;
  }

  async updateAccessToken(id: string, token: string): Promise<void>{
    await UserSequelizeModel.update({ token }, { where: { id } });
  }

  async loadByToken (token: string): Promise<LoadUserByTokenRepository.Result>{
    const user = await UserSequelizeModel.findOne({ where: { token } });
    return user? { id: user.id } : null;
  }

  async findByIdentifierCode(identifierCode: string):Promise<boolean>{
    const user = await UserSequelizeModel.findOne({ where: { identifierCode } });
    return user !== null;
  }

  async update (userId: string, data: UpdateUserRepository.Params): Promise<UpdateUserRepository.Result>{
    await UserSequelizeModel.update(data, { where: { id: userId } });
  }
}