import { DbListSocialGroups } from "@/data";
import { ListSocialGroups } from "@/domain/usecases";
import { SocialGroupSequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbListSocialGroups = (): ListSocialGroups => {
  const socialGroupRepository = new SocialGroupSequelizeRepository();
  return new DbListSocialGroups(socialGroupRepository);
};