import { sign, verify } from 'jsonwebtoken';

import { AccessTokenManager } from '../../application/security/accessTokenManager';

/**
 * Class representing a jwtManager
 * @class
 * @extends AccessTokenManager
 */
class JWTManager extends AccessTokenManager {
  /**
   * Generate jwt
   * @param {object} payload payload
   * @returns {string} jwt
   */
  generate(payload) {
    return sign(payload, process.env.APP_JWT_SECRET, {
      expiresIn: process.env.APP_JWT_TIME,
      algorithm: process.env.APP_JWT_ALGORITHM || 'HS256',
    });
  }

  /**
   * Decode jwt
   * @param {string} accessToken Access token
   * @returns {object} jwt data
   */
  decode(accessToken) {
    return verify(accessToken, process.env.APP_JWT_SECRET);
  }
}

export default JWTManager;
