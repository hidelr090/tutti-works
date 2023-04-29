import { DbUpdateJobVacancy } from "@/data/usecases";
import { UpdateJobVacancyRepositorySpy, LoadJobVacancyByIdRepositorySpy } from '@/tests/data/mocks';
import { throwError } from "@/tests/domain/mocks";
import { mockUpdateJobVacancyParams } from "@/tests/domain/mocks/update-job-vacancy";

type SutTypes = {
  sut: DbUpdateJobVacancy,
  updateJobVacancyRepositorySpy: UpdateJobVacancyRepositorySpy,
  loadJobVacancyByIdRepositorySpy: LoadJobVacancyByIdRepositorySpy
};

const makeSut = (): SutTypes => {

  const updateJobVacancyRepositorySpy = new UpdateJobVacancyRepositorySpy();

  const loadJobVacancyByIdRepositorySpy = new LoadJobVacancyByIdRepositorySpy();

  const sut = new DbUpdateJobVacancy(updateJobVacancyRepositorySpy, loadJobVacancyByIdRepositorySpy);

  return {
    sut,
    updateJobVacancyRepositorySpy,
    loadJobVacancyByIdRepositorySpy
  };

}

describe('DbUpdateJobVacancy', () => {
  test('Should call UpdateJobVancacyRepository with correct params', async () => {
    const {sut, updateJobVacancyRepositorySpy} = makeSut();

    const updateJobVacancyParams = mockUpdateJobVacancyParams();

    await sut.update(updateJobVacancyParams.id as string, updateJobVacancyParams);

    expect(updateJobVacancyRepositorySpy.data).toEqual(updateJobVacancyParams);
  });

  test('Should throw if UpdateJobVacancyRepository throws', async () => {
    const {sut, updateJobVacancyRepositorySpy} = makeSut();

    jest.spyOn(updateJobVacancyRepositorySpy, 'update').mockImplementationOnce(throwError);

    const updateJobVacancyParams = mockUpdateJobVacancyParams();

    const promise = sut.update(updateJobVacancyParams.id as string, updateJobVacancyParams);

    await expect(promise).rejects.toThrow();
  });

  test('Should return true on sucess', async () => {
    const { sut } = makeSut();

    const updateJobVacancyParams = mockUpdateJobVacancyParams();

    const isSuccessful = await sut.update(updateJobVacancyParams.id as string, updateJobVacancyParams);

    expect(isSuccessful).toBeTruthy();
  });

  test('Should LoadJobVacancyById return a JobVacancy', async () => {
    const { sut, loadJobVacancyByIdRepositorySpy } = makeSut();

    const updateJobVacancyParams = mockUpdateJobVacancyParams();

    await sut.update(updateJobVacancyParams.id as string, updateJobVacancyParams);

    const jobVacancy = await loadJobVacancyByIdRepositorySpy.loadById(updateJobVacancyParams.id);

    expect(typeof jobVacancy).toEqual(typeof updateJobVacancyParams);
    expect(jobVacancy.id).toBe(updateJobVacancyParams.id);
  });

});