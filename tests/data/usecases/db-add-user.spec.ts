import { DbAddUser } from "@/data/usecases";
import { mockAddUserParams, throwError } from "@/tests/domain/mocks";
import { HasherSpy, AddUserRepositorySpy, CheckUserByIdentifierCodeRepositorySpy, CheckUserByEmailRepositorySpy } from '@/tests/data/mocks';

type SutTypes = {
  sut: DbAddUser;
  hasherSpy: HasherSpy;
  addUserRepositorySpy: AddUserRepositorySpy;
  checkUserByIdentifierCodeRepositorySpy: CheckUserByIdentifierCodeRepositorySpy;
  checkUserByEmailRepositorySpy: CheckUserByEmailRepositorySpy;
}

const makeSut = (): SutTypes => {
  const checkUserByIdentifierCodeRepositorySpy = new CheckUserByIdentifierCodeRepositorySpy();
  const hasherSpy = new HasherSpy();
  const addUserRepositorySpy = new AddUserRepositorySpy();
  const checkUserByEmailRepositorySpy = new CheckUserByEmailRepositorySpy();
  const sut = new DbAddUser(hasherSpy, addUserRepositorySpy, checkUserByIdentifierCodeRepositorySpy, checkUserByEmailRepositorySpy);
  return {
    sut,
    hasherSpy,
    addUserRepositorySpy,
    checkUserByIdentifierCodeRepositorySpy,
    checkUserByEmailRepositorySpy
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
      avatarUrl: addUserParams.avatarUrl
    })
  });

  test('Should throw if AddUserRepository throws', async () => {
    const { sut, addUserRepositorySpy }  = makeSut();

    jest.spyOn(addUserRepositorySpy, 'add').mockImplementationOnce(throwError);

    const promise = sut.add(mockAddUserParams());

    await expect(promise).rejects.toThrow();

  });

  test('Should rreturn true on success',async  () => {
    const { sut } = makeSut();
    
    const isValid = await sut.add(mockAddUserParams());

    expect(isValid).toBeTruthy();
  });

  test('Should return false if AddUserRepository returns false', async () => {
    const { sut, addUserRepositorySpy } = makeSut();

    jest.spyOn(addUserRepositorySpy, 'add').mockResolvedValueOnce(false);

    const isValid = await sut.add(mockAddUserParams());

    expect(isValid).toBeFalsy();
  });

  test('Should return false if CheckUserByIdentifierCode is false', async () => {
    const { sut, checkUserByIdentifierCodeRepositorySpy } = makeSut();

    jest.spyOn(checkUserByIdentifierCodeRepositorySpy, 'findByIdentifierCode').mockResolvedValueOnce(true);

    const isValid = await sut.add(mockAddUserParams());

    expect(isValid).toBeFalsy();
  });

  test('Should call CheckUserByIdentifierCode with correct parameters', async () => {
    const { sut, checkUserByIdentifierCodeRepositorySpy}  = makeSut();

    const addUserParams = mockAddUserParams();

    await sut.add(addUserParams);

    expect(checkUserByIdentifierCodeRepositorySpy.identifierCode).toBe(addUserParams.identifierCode);

  });
  
  test('Should return false if checkUserByEmail is false', async () => {
    const { sut, checkUserByEmailRepositorySpy } = makeSut();

    jest.spyOn(checkUserByEmailRepositorySpy, 'findByEmail').mockResolvedValueOnce(true);

    const isValid = await sut.add(mockAddUserParams());

    expect(isValid).toBeFalsy();
  });

  test('Should call CheckUserByIdentifierCode with correct parameters', async () => {
    const { sut, checkUserByEmailRepositorySpy}  = makeSut();

    const addUserParams = mockAddUserParams();

    await sut.add(addUserParams);

    expect(checkUserByEmailRepositorySpy.email).toBe(addUserParams.email);

  });
  
});



