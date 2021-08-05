import { User } from '../../../../src/domain/entities/user';

import { CreateUser } from '../../../../src/application/use_cases/user';

import BcryptManager from '../../../../src/infrastructure/security/bcryptManager';

import UserRepository from '../../../../src/domain/repositories/user/userRepository';

const bcryptManager = new BcryptManager();
const userRepository = new UserRepository();

describe('Use Case: CreateUser', () => {
  test('Should resolve with the newly persisted user (augmented with an ID)', async () => {
    // given
    const persistedUser = new User(
      1,
      'John',
      'Doe',
      'john.doe@email.com',
      '$2b$10$xMfySs6HNuJHTwrvKZUCLOZWoOcmkOiSyw5qCaNqyfi3xMtNYU2Qi1',
      null,
      null,
      'male'
    );

    userRepository.getByEmail = jest.fn(() => Promise.resolve(false));
    userRepository.persist = jest.fn(() => Promise.resolve(persistedUser));

    // when
    const user = await CreateUser(persistedUser, {
      userRepository,
      bcryptManager,
    });

    // then
    expect(user).toEqual(persistedUser);
    // expect(userRepository.persist).toHaveBeenCalledWith(persistedUser);
  });

  test('Should resolve user exist', async () => {
    // given
    const persistedUser = new User(1, 'John', 'Doe', 'john.doe@email.com', 'abcd-1234', null, null, 'male');

    userRepository.getByEmail = jest.fn(() => Promise.resolve(persistedUser));

    // when
    const ThrowWrongAccessToken = async () => {
      await CreateUser(
        {
          firstname: 'joe',
          lastname: 'doe',
          email: 'john@mail.com',
          password: 'abcd-1234',
          gender: 'male',
        },
        {
          userRepository,
          bcryptManager,
        }
      );
    };

    // then
    expect(ThrowWrongAccessToken).rejects.toThrowError('user already exists, check that it is not disabled');
  });
});
