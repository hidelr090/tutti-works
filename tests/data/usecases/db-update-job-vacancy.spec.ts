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
});
