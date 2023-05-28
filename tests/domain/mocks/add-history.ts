import { AddHistory } from "@/domain/usecases";

import Chance from "chance";

const chance = new Chance();

export const mockAddHistoryParams = (): AddHistory.Params => ({
  userId: "83e9be26-4182-4594-af8f-25e1af5830c7",
  description: chance.sentence({words: 20}),
  name: chance.string(),
  start: new Date(),
  end: new Date(),
});
