import httpStatus from 'http-status';

import HttpException from '../exceptions/httpException';

import AuthSerializer from '../../serializers/auth/loginSerializer';

import JwtManager from '../../../infrastructure/security/jwtManager';
import BcryptManager from '../../../infrastructure/security/bcryptManager';

import GetAuthorization from '../../../application/use_cases/auth/getAccessToken';

import UserRepositoryMongo from '../../../infrastructure/repositories/user/userRepositoryMongo';

const jwtManager = new JwtManager();
const bcryptManager = new BcryptManager();
const userRepository = new UserRepositoryMongo();
const authSerializer = new AuthSerializer();

/**
 * Class representing a auth controller.
 * @class
 * @classdesc Auth controller
 * @namespace Controllers/AuthController
 */
class AuthController {
  /**
   * Login handler
   *
   * @async
   * @function
   * @memberof Controllers/AuthController
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next Next
   * @throws {HttpException} Http exception - Bad Request
   * @returns {Response|NextFunction} Response
   */
  static async getAuthorization(req, res, next) {
    const { body } = req;

    try {
      const token = await GetAuthorization(body, {
        userRepository,
        jwtManager,
        bcryptManager,
      });

      return res.status(httpStatus.OK).send(authSerializer.serialize(token));
    } catch (error) {
      next(new HttpException(httpStatus.BAD_REQUEST, error.message));
    }
  }
}

export default AuthController;
