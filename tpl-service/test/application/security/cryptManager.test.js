import CryptManager from '../../../src/application/security/cryptManager';

const cryptManager = new CryptManager();

describe('Security: CryptManager', () => {
  test('Should be resolved with an NotImplementedException in the hash function', () => {
    // then
    expect(cryptManager.hash).toThrow();
    expect(cryptManager.hash).toThrowError('method not implemented')
  });

  test('Should be resolved with an NotImplementedException in the compare function', () => {
    expect(cryptManager.compare).toThrow();
    expect(cryptManager.compare).toThrowError('method not implemented')
  });
});
