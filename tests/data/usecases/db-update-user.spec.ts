import { DbUpdateUser } from "@/data/usecases";
import { UpdateUserRepositorySpy, LoadUserByIdRepositorySpy } from '@/tests/data/mocks';
import { mockUpdateUserParams, throwError } from "@/tests/domain/mocks";

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

  test('Should throw if UpdateUserRepository throws', async () => {
    const { sut, updateUserRepositorySpy } = makeSut();

    jest.spyOn(updateUserRepositorySpy, 'update').mockImplementationOnce(throwError);
    
    const updateUserParams = mockUpdateUserParams();

    const promise = sut.update(updateUserParams.id as string, updateUserParams);

    await expect(promise).rejects.toThrow();
  });

  test('Should return true on success',async () => {
    const { sut } = makeSut();
    
    const updateUserParams = mockUpdateUserParams();

    const isSuccessful = sut.update(updateUserParams.id as string, updateUserParams);

    expect(isSuccessful).toBeTruthy();
  });
  
});



