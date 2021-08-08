import HttpStatus from 'http-status';

import { CreateUser, UpdateUser, GetUser, ListUsers, DeleteUser } from '../../../application/use_cases/user';

import UserSerializer from '../../serializers/user/userSerializer';
import BcryptManager from '../../../infrastructure/security/bcryptManager';

import HttpException from '../exceptions/httpException';
import NotFoundException from '../exceptions/notFoundException';

import UserRepositoryMongo from '../../../infrastructure/repositories/user/userRepositoryMongo';

const bcryptManager = new BcryptManager();
const userSerializer = new UserSerializer();
const userRepository = new UserRepositoryMongo();

/**
 * Class representing a user controller.
 * @class
 * @classdesc User controller.
 * @namespace Controllers/UserController
 */
class UserController {
  /**
   * Create a user handler
   *
   * @async
   * @function
   * @memberof Controllers/UserController
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next Next
   * @throws {HttpException} Http exception - Duplicate entity
   * @returns {Response|NextFunction} Response
   */
  async createUser(req, res, next) {
    const { body } = req;

    try {
      const user = await CreateUser(body, { userRepository, bcryptManager });
      return res.status(HttpStatus.CREATED).send(userSerializer.serialize(user));
    } catch (error) {
      next(new HttpException(HttpStatus.CONFLICT, error.message));
    }
  }

  /**
   * Retrieve a user handler
   *
   * @async
   * @function
   * @memberof Controllers/UserController
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next Next
   * @throws {HttpException} Http exception - Not found
   * @returns {Response|NextFunction} Response
   */
  async getUser(req, res, next) {
    const { id } = req.params;
    try {
      const user = await GetUser(id, { userRepository });
      return res.send(userSerializer.serialize(user));
    } catch (error) {
      next(new NotFoundException());
    }
  }

  /**
   * Retrieve all users handler
   *
   * @async
   * @function
   * @memberof Controllers/UserController
   * @param {Request} req Request
   * @param {Response} res Response
   * @returns {Response} Response
   */
  async getAllUsers(req, res) {
    const users = await ListUsers({ userRepository });

    return res.send(userSerializer.serialize(users));
  }

  /**
   * Update a user handler
   *
   * @async
   * @function
   * @memberof Controllers/UserController
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next Next
   * @throws {HttpException} Http exception - Internal Server Error
   * @returns {Response|NextFunction} Response
   */
  async updateUser(req, res, next) {
    const { body } = req;
    const { id } = req.params;

    try {
      await UpdateUser(id, body, { userRepository });

      return res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }

  /**
   * Delete a user handler
   *
   * @async
   * @function
   * @memberof Controllers/UserController
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next Next
   * @throws {HttpException} Http exception - Internal Server Error
   * @returns {Response|next} Response
   */
  async deleteUser(req, res, next) {
    const { id } = req.params;

    try {
      await DeleteUser(id, { userRepository });
      return res.status(204).send();
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
}

export default UserController;
