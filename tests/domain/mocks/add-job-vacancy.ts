import { AddJobVacancy } from "@/domain/usecases";

import Chance from "chance";

const chance = new Chance();

export const mockAddJobVacancyParams = (): AddJobVacancy.Params => ({
  description: 'Esta vaga de auxliar administrativo para pessoas pardas ou pretas',
  recruiterId: chance.guid(),
  title: 'Auxiliar Administrativo',
  company: 'Vara Criminal',
  wage: 3800.00,
  socialGroupsIds: [ 'Pardos', 'Pretos' ],
});