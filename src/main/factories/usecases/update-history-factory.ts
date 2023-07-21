import { DbUpdateHistory } from "../../../data";
import { UpdateHistory } from "../../../domain/usecases";
import { HistorySequelizeRepository } from "../../../infra/db/sequelize/repositories";

export const makeDbUpdateHistory = (): UpdateHistory => {
  const hsitoryRepository = new HistorySequelizeRepository();
  return new DbUpdateHistory(hsitoryRepository, hsitoryRepository);
};