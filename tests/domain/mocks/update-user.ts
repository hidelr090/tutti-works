import { UpdateUser } from "@/domain/usecases";

import Chance from "chance";

const chance = new Chance();

export const mockUpdateUserParams = (): UpdateUser.Params => ({
  name: chance.name(),
  email: chance.email(),
  password: 'valid_password',
  identifierCode: chance.integer({min: 11, max: 11}).toString(),
  phone: chance.phone(),
  id: chance.guid(),
});