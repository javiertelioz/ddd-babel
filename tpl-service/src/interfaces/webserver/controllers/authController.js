import httpStatus from 'http-status';

import HttpException from '../exceptions/httpException';

import LoginSerializer from '../../serializers/auth/loginSerializer';

import JwtManager from '../../../infrastructure/security/jwtManager';
import BcryptManager from '../../../infrastructure/security/bcryptManager';

import GetAuthorization from '../../../application/use_cases/auth/getAccessToken';

import UserRepositoryMongo from '../../../infrastructure/repositories/user/userRepositoryMongo';

const jwtManager = new JwtManager();
const bcryptManager = new BcryptManager();
const userRepository = new UserRepositoryMongo();

/**
 * Class representing a auth controller.
 * @class
 */
class AuthController {
  /**
   * Login Action
   * @async
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {Function} next Next
   * @returns {Response} Login response
   */
  static async getAuthorization(req, res, next) {
    const { body } = req;

    try {
      const token = await GetAuthorization(body, {
        userRepository,
        jwtManager,
        bcryptManager,
      });

      return res.status(httpStatus.OK).send(LoginSerializer.serialize(token));
    } catch (error) {
      next(new HttpException(httpStatus.BAD_REQUEST, error.message));
    }
  }
}

export default AuthController;