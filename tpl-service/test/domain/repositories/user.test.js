import UserRepository from '../../../src/domain/repositories/user/userRepository';

const userRepository = new UserRepository();

describe('Domain | User Repository : CryptManager', () => {
  test('Should be resolved with an NotImplementedException in the persist function', () => {
    // then
    expect(userRepository.persist).toThrow();
    expect(userRepository.persist).toThrowError('method not implemented');
  });

  test('Should be resolved with an NotImplementedException in the merge function', () => {
    expect(userRepository.merge).toThrow();
    expect(userRepository.merge).toThrowError('method not implemented');
  });

  test('Should be resolved with an NotImplementedException in the remove function', () => {
    // then
    expect(userRepository.remove).toThrow();
    expect(userRepository.remove).toThrowError('method not implemented');
  });

  test('Should be resolved with an NotImplementedException in the get function', () => {
    // then
    expect(userRepository.get).toThrow();
    expect(userRepository.get).toThrowError('method not implemented');
  });

  test('Should be resolved with an NotImplementedException in the getByEmail function', () => {
    // then
    expect(userRepository.getByEmail).toThrow();
    expect(userRepository.getByEmail).toThrowError('method not implemented');
  });

  test('Should be resolved with an NotImplementedException in the find function', () => {
    // then
    expect(userRepository.find).toThrow();
    expect(userRepository.find).toThrowError('method not implemented');
  });
});
