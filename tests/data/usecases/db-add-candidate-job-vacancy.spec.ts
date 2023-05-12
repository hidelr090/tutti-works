import { DbAddCandidateJobVacancy } from "@/data/usecases";
import { AddCandidateJobVacancyRepositorySpy } from "@/tests/data/mocks";
import { mockSubmitApplication, throwError } from '@/tests/domain/mocks';

type SutTypes = {
  sut: DbAddCandidateJobVacancy;
  addCandidateJobVacancyRepositorySpy: AddCandidateJobVacancyRepositorySpy;
}

const makeSut = (): SutTypes => {
  const addCandidateJobVacancyRepositorySpy = new AddCandidateJobVacancyRepositorySpy();
  const sut = new DbAddCandidateJobVacancy(addCandidateJobVacancyRepositorySpy);

  return {
    sut,
    addCandidateJobVacancyRepositorySpy
  }
};

describe('Submit job application usecase', () => {
  test('Should call AddCandidateJobVacancyRepository with correct values', async () => {
    const {sut, addCandidateJobVacancyRepositorySpy} = makeSut();

    const applicationData = mockSubmitApplication();

    await sut.submitApplication(applicationData);

    expect(addCandidateJobVacancyRepositorySpy.params).toEqual(applicationData);
  });

  test('Should throw if AddCandidateJobVacancyRepository throws', async () => {
    const {sut, addCandidateJobVacancyRepositorySpy} = makeSut();

    jest.spyOn(addCandidateJobVacancyRepositorySpy, 'add').mockImplementationOnce(throwError);

    const promise = sut.submitApplication(mockSubmitApplication());

    await expect(promise).rejects.toThrow();
  });

  test('Should return true on sucess',async () => {
    const { sut } = makeSut();

    const isValid = await sut.submitApplication(mockSubmitApplication());

    expect(isValid).toBeTruthy();
  });
  
});