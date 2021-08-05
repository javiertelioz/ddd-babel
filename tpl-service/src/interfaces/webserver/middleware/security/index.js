import HttpException from '../../exceptions/httpException';

import JwtManager from '../../../../infrastructure/security/jwtManager';
import VerifyAuthorization from '../../../../application/use_cases/auth/verifyAccessToken';

const jwtManager = new JwtManager();

/**
 * Verify authentication header
 * @function
 * @param {Request} req Request object
 * @param {Response} res Response Object
 * @param {Function} next Next function
 * @returns {Response} response
 * @throws {HttpException} Http error
 */
function Authorization(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new HttpException(401, 'Authentication token missing');
  }

  const token = authorization.replace(/Bearer/gi, '').replace(/ /g, '');

  if (!token) {
    res.sendStatus(401);
    throw new HttpException(401, 'Authentication token missing');
  }

  try {
    req.user = VerifyAuthorization(token, { jwtManager });
    next();
  } catch (error) {
    next(new HttpException(401, error.message));
  }
}

export default Authorization;
