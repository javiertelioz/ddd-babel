import { User } from '../../../../src/domain/entities/user';

import { GetUser } from '../../../../src/application/use_cases/user';

import UserRepository from '../../../../src/domain/repositories/user/userRepository';

const userRepository = new UserRepository();

describe('Use Case: GetUser', () => {
  test('Should resolve with the corresponding persisted user entity', async () => {
    // given
    const correspondingUser = new User(123, 'John', 'Doe', 'john.doe@email.com', 'abcd-1234', 'basic', 'male');
    userRepository.get = jest.fn(() => Promise.resolve(correspondingUser));

    // when
    const user = await GetUser(123, { userRepository });

    // then
    expect(userRepository.get).toHaveBeenCalledWith(123);
    expect(user).toEqual(correspondingUser);
  });

  test('Should resolve with user entity not found', async () => {
    // given
    userRepository.get = jest.fn(() => Promise.resolve(false));

    // when
    const ThrowNotFound = async () => await GetUser(123, { userRepository });

    // then
    expect(ThrowNotFound).rejects.toThrowError('entity not found');
  });
});
