import { makeUpdateHistoryValidation,  makeDbUpdateHistory } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UpdateHistoryController } from '@/presentation/controllers'

export const makeUpdateHistoryController = (): Controller => {
  return new UpdateHistoryController(makeUpdateHistoryValidation(), makeDbUpdateHistory());
}
