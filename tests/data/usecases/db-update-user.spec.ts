import { DbUpdateUser } from "@/data/usecases";
import { UpdateUserRepositorySpy, LoadUserByIdRepositorySpy } from '@/tests/data/mocks';
import { mockUpdateUserParams } from "@/tests/domain/mocks";

type SutTypes = {
  sut: DbUpdateUser,
  updateUserRepositorySpy: UpdateUserRepositorySpy,
  loadUserByIdRepositorySpy: LoadUserByIdRepositorySpy
};

const makeSut = (): SutTypes => {

  const updateUserRepositorySpy = new UpdateUserRepositorySpy();

  const loadUserByIdRepositorySpy = new LoadUserByIdRepositorySpy();

  const sut = new DbUpdateUser(updateUserRepositorySpy, loadUserByIdRepositorySpy);

  return {
    sut,
    updateUserRepositorySpy,
    loadUserByIdRepositorySpy
  };

}

describe('DbUpdateUser', () => {
  test('Should call updateUserRepository with correct parameters', async () => {
    const { sut, updateUserRepositorySpy } = makeSut();

    const updateUserParams = mockUpdateUserParams();

    await sut.update(updateUserParams.id as string, updateUserParams);

    expect(updateUserRepositorySpy.data).toEqual(updateUserParams);
  });
});



