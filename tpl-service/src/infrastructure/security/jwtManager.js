import { sign, verify } from 'jsonwebtoken';

import AccessTokenManager from '../../application/security/accessTokenManager';

/**
 * Class representing a JWT manager
 * @class
 * @classdesc
 * @augments AccessTokenManager
 */
class JWTManager extends AccessTokenManager {
  /**
   * Synchronously sign the given payload into a JSON Web Token string
   * @function
   * @implements {AccessTokenManager#generate}
   * @param {string|object} payload Payload to sign, could be an literal, buffer or string
   * @returns {string}  The JSON Web Token string
   */
  generate(payload) {
    return sign(payload, process.env.APP_JWT_SECRET, {
      expiresIn: process.env.APP_JWT_TIME,
      algorithm: process.env.APP_JWT_ALGORITHM || 'HS256',
    });
  }

  /**
   * Verify given token using a secret or a public key to get a decoded token
   * @function
   * @implements {AccessTokenManager#decode}
   * @param {string} token JWT string to verify
   * @returns {object|string} The decoded token.
   */
  decode(token) {
    return verify(token, process.env.APP_JWT_SECRET);
  }
}

export default JWTManager;
