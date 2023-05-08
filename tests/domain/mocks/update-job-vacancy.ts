import Chance from "chance";

const chance = new Chance();

export const mockUpdateJobVacancyParams = () => ({
  id: chance.guid(),
  description: 'Vaga de Pedreiro',
  recruiterId: chance.guid(),
  title: 'Pedreiro',
  company: 'Votorantim',
  salary: 56.800,
  socialGroupsIds: [
    chance.guid(),
    chance.guid(),
    chance.guid()
  ],
  deletedAt: new Date()
});