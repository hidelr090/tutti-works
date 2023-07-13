import { makeDbLoadUserById } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadUserByIdController } from '@/presentation/controllers'

export const makeLoadUserByIdController = (): Controller => {
  return new LoadUserByIdController(makeDbLoadUserById());
}
