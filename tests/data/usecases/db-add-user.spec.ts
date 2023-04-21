import { DbAddUser } from "@/data/usecases";
import { mockAddUserParams, throwError } from "@/tests/domain/mocks";
import { HasherSpy, AddUserRepositorySpy, CheckUserByIdentifierCodeRepositorySpy } from '@/tests/data/mocks';

type SutTypes = {
  sut: DbAddUser;
  hasherSpy: HasherSpy;
  addUserRepositorySpy: AddUserRepositorySpy;
  checkUserByIdentifierCodeRepositorySpy: CheckUserByIdentifierCodeRepositorySpy;
}

const makeSut = (): SutTypes => {
  const checkUserByIdentifierCodeRepositorySpy = new CheckUserByIdentifierCodeRepositorySpy();
  const hasherSpy = new HasherSpy();
  const addUserRepositorySpy = new AddUserRepositorySpy();
  const sut = new DbAddUser(hasherSpy, addUserRepositorySpy, checkUserByIdentifierCodeRepositorySpy);
  return {
    sut,
    hasherSpy,
    addUserRepositorySpy,
    checkUserByIdentifierCodeRepositorySpy
  }
};

describe('DbAddUser Usecase', () =>{
  test('Should call Hasher with correct plaintext', async () =>{
    const { sut, hasherSpy } = makeSut();
  
    const addUserParams = mockAddUserParams();

    await sut.add(addUserParams);
  
    expect(hasherSpy.plaintext).toBe(addUserParams.password);
  });

  test('Should throw if Hasher throws', async () =>{
    const { sut, hasherSpy } = makeSut();

    jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(throwError);

    const promise = sut.add(mockAddUserParams());

    expect(promise).rejects.toThrow();
  });

  test('Should call AddUserRepository with correct values', async () =>{
    const { sut, addUserRepositorySpy, hasherSpy } = makeSut();

    const addUserParams = mockAddUserParams();

    await sut.add(addUserParams);

    expect(addUserRepositorySpy.params).toEqual({
      name: addUserParams.name,
      email: addUserParams.email,
      password: hasherSpy.digest,
      identifierCode: addUserParams.identifierCode,
      phone: addUserParams.phone,
    })
  });

  test('Should throw if AddUserRepository throws', async () => {
    const { sut, addUserRepositorySpy }  = makeSut();

    jest.spyOn(addUserRepositorySpy, 'add').mockImplementationOnce(throwError);

    const promise = sut.add(mockAddUserParams());

    await expect(promise).rejects.toThrow();

  })

  
});

