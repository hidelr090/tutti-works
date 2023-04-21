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

  
});

