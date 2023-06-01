import { AddRecruiter } from "@/domain/usecases";

export const mockAddRecruiter = (): AddRecruiter.Params =>({
  userId: 'valid_user_id',
  company: 'Valid company'
});