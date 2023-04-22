import { DbAddJobVacancy } from "@/data/usecases";
import { AddJobVacancyRepositorySpy } from "@/tests/data/mocks";
import { mockAddJobVacancyParams, throwError } from '@/tests/domain/mocks'


type SutTypes = {
  sut: DbAddJobVacancy;
  addJobVacancyRepositorySpy: AddJobVacancyRepositorySpy;
}

const makeSut = ( ): SutTypes => {
  const addJobVacancyRepositorySpy = new AddJobVacancyRepositorySpy();
  const sut = new DbAddJobVacancy(addJobVacancyRepositorySpy);

  return {
    sut,
    addJobVacancyRepositorySpy
  };
}

describe('DbAddAccount Usecase', () => {
  test('Should call addJobVacancyRepository with correct parameters', async () => {
    const { sut, addJobVacancyRepositorySpy } = makeSut();

    const addJobVacancyParams = mockAddJobVacancyParams();

    await sut.add(addJobVacancyParams);

    expect(addJobVacancyRepositorySpy.params).toEqual({
      description: addJobVacancyParams.description,
      title: addJobVacancyParams.title,
      announcerId: addJobVacancyParams.announcerId,
      salary: addJobVacancyParams.salary,
      company: addJobVacancyParams.company
    });

  });

  
});