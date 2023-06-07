import { adaptMiddleware } from '@/main/adapters'
import { makeAuthMiddleware } from '@/main/factories'
import { UserRole } from '@/utils/enumerators'

export const recruiterAuth = adaptMiddleware(makeAuthMiddleware(UserRole.RECRUITER))
