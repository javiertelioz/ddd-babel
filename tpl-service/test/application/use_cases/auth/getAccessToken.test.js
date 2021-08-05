import { User } from '../../../../src/domain/entities/user';

import GetAccessToken from '../../../../src/application/use_cases/auth/getAccessToken';

import JwtManager from '../../../../src/infrastructure/security/jwtManager';
import BcryptManager from '../../../../src/infrastructure/security/bcryptManager';

import UserRepository from '../../../../src/domain/repositories/user/userRepository';

const jwtManager = new JwtManager();
const bcryptManager = new BcryptManager();
const userRepository = new UserRepository();

describe('Use Case: GetAccessToken', () => {
  test('Should resolve with a generated access token when credentials are ok', async () => {
    // given
    const credentials = {
      password: 'abcd-1234',
      email: 'john@mail.com',
    };

    bcryptManager.compare = jest.fn(() => true);
    jwtManager.generate = jest.fn(() => 'generated-jwt-access-token');
    userRepository.getByEmail = jest.fn(() => {
      return Promise.resolve(new User(1, 'joe', 'doe', 'john@mail.com', 'abcd-1234', 'profile', 'male'));
    });

    // when
    const accessToken = await GetAccessToken(credentials, {
      userRepository,
      jwtManager,
      bcryptManager,
    });

    // then
    expect(accessToken.token).toBe('generated-jwt-access-token');
  });

  test('Should reject when user was not found', async () => {
    // given
    const credentials = {
      password: 'abcd-1234',
      email: 'john@mail.com',
    };
    jwtManager.generate = jest.fn(() => 'generated-jwt-access-token');
    userRepository.getByEmail = jest.fn(() => {
      return Promise.resolve(false);
    });

    // when
    const ThrowNotFound = async () => {
      await GetAccessToken(credentials, {
        userRepository,
        jwtManager,
        bcryptManager,
      });
    };

    // then
    return expect(ThrowNotFound).rejects.toThrow('email or password are incorrect');
  });

  test('Should reject when password did not match', async () => {
    // given
    const credentials = {
      password: 'abcd-1234',
      email: 'john@mail.com',
    };

    bcryptManager.compare = jest.fn(() => false);
    jwtManager.generate = jest.fn(() => 'generated-jwt-access-token');
    userRepository.getByEmail = jest.fn(() => {
      return Promise.resolve(new User(1, 'joe', 'doe', 'john@mail.com', 'abcd-1234', 'profile', 'male'));
    });

    // when
    const ThrowNotMatchPassword = async () => {
      await GetAccessToken(credentials, {
        userRepository,
        jwtManager,
        bcryptManager,
      });
    };

    // then
    return expect(ThrowNotMatchPassword).rejects.toThrow('email or password are incorrect');
  });
});
