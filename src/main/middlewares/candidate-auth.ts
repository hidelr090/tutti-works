import { adaptMiddleware } from '@/main/adapters'
import { makeAuthMiddleware } from '@/main/factories'
import { UserRole } from '@/utils/enumerators'

export const candidateAuth = adaptMiddleware(makeAuthMiddleware(UserRole.CANDIDATE))