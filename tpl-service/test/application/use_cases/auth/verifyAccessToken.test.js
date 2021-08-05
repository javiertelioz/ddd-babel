import VerifyAccessToken from '../../../../src/application/use_cases/auth/verifyAccessToken';

import JwtManager from '../../../../src/infrastructure/security/jwtManager';

const jwtManager = new JwtManager();

describe('Use Case: VerifyAccessToken', () => {
  test('Should resolve with the decoded user data (ID) when JWT access token is valid', () => {
    // given
    jwtManager.decode = jest.fn(() => ({
      uid: 1234,
      role: 'admin',
    }));

    // when
    const result = VerifyAccessToken('some-jwt-access-token', { jwtManager });

    // then
    expect(result).toEqual({
      uid: 1234,
      role: 'admin',
    });
  });

  test('Should throw an Error when JWT access token is invalid', () => {
    // given
    jwtManager.decode = jest.fn(() => undefined);

    // when
    const ThrowWrongAccessToken = () => {
      VerifyAccessToken('a-wrong-jwt-access-token', { jwtManager });
    };

    expect(ThrowWrongAccessToken).toThrowError("you're not authorized");
  });
});
