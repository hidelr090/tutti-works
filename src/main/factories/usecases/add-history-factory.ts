import { DbAddHistory } from "@/data";
import { AddHistory } from "@/domain/usecases";
import { HistorySequelizeRepository } from "@/infra/db/sequelize/repositories";

export const makeDbAddHistory = (): AddHistory => {
  const historySequelizeRepository = new HistorySequelizeRepository();
  return new DbAddHistory(historySequelizeRepository);
};