import { User } from '../../../../src/domain/entities/user';

import { DeleteUser } from '../../../../src/application/use_cases/user';

import UserRepository from '../../../../src/domain/repositories/user/userRepository';

const userRepository = new UserRepository();

describe('Use Case: DeleteUser', () => {
  test('Should resolve deleted user', async () => {
    // given
    userRepository.get = jest.fn(() => {
      return Promise.resolve(new User(123, 'joe', 'doe', 'john@mail.com', 'abcd-1234', 'profile', 'male'));
    });
    userRepository.remove = jest.fn(() => Promise.resolve(true));

    // when
    const userDeleted = await DeleteUser(123, { userRepository });

    // then
    expect(userDeleted).toBe(true);
    expect(userRepository.remove).toHaveBeenCalledWith(123);
  });

  test('Should resolve user not found', async () => {
    // given
    userRepository.get = jest.fn(() => Promise.resolve(false));
    userRepository.remove = jest.fn(() => Promise.resolve(true));

    // when
    const ThrowNotFound = async () => await DeleteUser(123, { userRepository });

    // then
    expect(ThrowNotFound).rejects.toThrowError('entity not found');
  });
});
