import { makeDbLoadUserByToken } from '@/main/factories';
import { Middleware } from '@/presentation/protocols'
import { AuthMiddleware } from '@/presentation/middlewares'

export const makeAuthMiddleware = (role?: number): Middleware => {
  return new AuthMiddleware(makeDbLoadUserByToken(), role)
}
