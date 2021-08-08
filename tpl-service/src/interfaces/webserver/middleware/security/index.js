import httpStatus from 'http-status';

import HttpException from '../../exceptions/httpException';

import JwtManager from '../../../../infrastructure/security/jwtManager';
import VerifyAuthorization from '../../../../application/use_cases/auth/verifyAccessToken';

const jwtManager = new JwtManager();

/**
 * Verify authentication header
 *
 * @function
 * @module interfaces/webserver/middleware/Authorization
 *
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {NextFunction} next Next
 * @throws {HttpException} Http exception - Unauthorized
 * @returns {Response|NextFunction} Response
 */
function Authorization(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new HttpException(httpStatus.UNAUTHORIZED, 'Authentication token missing');
  }

  const token = authorization.replace(/Bearer/gi, '').replace(/ /g, '');

  if (!token) {
    res.sendStatus(401);
    throw new HttpException(httpStatus.UNAUTHORIZED, 'Authentication token missing');
  }

  try {
    req.user = VerifyAuthorization(token, { jwtManager });
    next();
  } catch (error) {
    next(new HttpException(httpStatus.UNAUTHORIZED, error.message));
  }
}

export default Authorization;
