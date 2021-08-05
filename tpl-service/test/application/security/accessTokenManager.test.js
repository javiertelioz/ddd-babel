import AccessTokenManager from '../../../src/application/security/accessTokenManager';

const accessTokenManager = new AccessTokenManager();

describe('Security: AccessTokenManager', () => {
  test('Should be resolved with an NotImplementedException in the generation function', () => {
    // then
    expect(accessTokenManager.generate).toThrow();
    expect(accessTokenManager.generate).toThrowError('method not implemented')
  });

  test('Should be resolved with an NotImplementedException in the decode function', () => {
    expect(accessTokenManager.decode).toThrow();
    expect(accessTokenManager.decode).toThrowError('method not implemented')
  });
});
