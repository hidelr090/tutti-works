import { adaptMiddleware } from '../adapters'
import { makeAuthMiddleware } from '../factories'
import { UserRole } from '../../utils/enumerators'

export const recruiterAuth = adaptMiddleware(makeAuthMiddleware(UserRole.RECRUITER))
