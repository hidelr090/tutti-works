import { AddUser } from "@/domain/usecases";

import Chance from "chance";

const chance = new Chance();

export const mockAddUserParams = (): AddUser.Params => ({
  name: chance.name(),
  email: chance.email(),
  password: 'valid_password',
  identifierCode: chance.integer({min: 11, max: 11}).toString(),
  phone: chance.phone(),
  avatarUrl: chance.url().toString(),
  birthDate: chance.date(),
  role: 1
});

//export const mockAuthenticationParams = (): Authentication.Params => ({});


