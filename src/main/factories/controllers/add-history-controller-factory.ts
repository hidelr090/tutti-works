import { makeAddHistoryValidation,  makeDbAddHistory } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddHistoryController } from '@/presentation/controllers'

export const makeAddHistoryController = (): Controller => {
  return new AddHistoryController(makeAddHistoryValidation(), makeDbAddHistory());
}