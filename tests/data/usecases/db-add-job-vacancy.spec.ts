import { DbAddJobVacancy } from "@/data/usecases";
import { AddJobVacancyRepositorySpy, AddJobVacancySocialGroupRepositorySpy } from "@/tests/data/mocks";
import { mockAddJobVacancyParams, throwError } from '@/tests/domain/mocks'


type SutTypes = {
  sut: DbAddJobVacancy;
  addJobVacancyRepositorySpy: AddJobVacancyRepositorySpy;
  addJobVacancySocialGroupRepositorySpy: AddJobVacancySocialGroupRepositorySpy;
}

const makeSut = ( ): SutTypes => {
  const addJobVacancyRepositorySpy = new AddJobVacancyRepositorySpy();

  const addJobVacancySocialGroupRepositorySpy = new AddJobVacancySocialGroupRepositorySpy();

  const sut = new DbAddJobVacancy(addJobVacancyRepositorySpy, addJobVacancySocialGroupRepositorySpy);

  return {
    sut,
    addJobVacancyRepositorySpy,
    addJobVacancySocialGroupRepositorySpy
  };
}

describe('DbAddAccount Usecase', () => {
  test('Should call addJobVacancyRepository with correct parameters', async () => {
    const { sut, addJobVacancyRepositorySpy } = makeSut();

    const addJobVacancyParams = mockAddJobVacancyParams();

    expect(await sut.add(addJobVacancyParams)).toBeTruthy();

  });

  test('Should throw if addJobVacancyRepository throws', async () => {
    const { sut, addJobVacancyRepositorySpy } = makeSut();

    jest.spyOn(addJobVacancyRepositorySpy, 'add').mockImplementationOnce(throwError);

    const promise = sut.add(mockAddJobVacancyParams());

    await expect(promise).rejects.toThrow();

  });
  
  test('Should return true on success', async () => {
    const { sut } = makeSut();

    const isValid = await sut.add(mockAddJobVacancyParams());

    expect(isValid).toBeTruthy();
  });
  
});