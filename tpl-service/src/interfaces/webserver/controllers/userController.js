import HttpStatus from 'http-status';

import { CreateUser, UpdateUser, GetUser, ListUsers, DeleteUser } from '../../../application/use_cases/user';

import UserSerializer from '../../serializers/user/userSerializer';
import BcryptManager from '../../../infrastructure/security/bcryptManager';

import HttpException from '../exceptions/httpException';
import NotFoundException from '../exceptions/notFoundException';

import UserRepositoryMongo from '../../../infrastructure/repositories/user/userRepositoryMongo';

const userRepository = new UserRepositoryMongo();
const bcryptManager = new BcryptManager();

/**
 * @class
 * @classdesc Class representing a user controller.
 */
class UserController {
  /**
   * Create a user
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {Function} next Next function
   * @returns {Response| next} Response
   * @throws {HttpException} Duplicate entity
   */
  async createUser(req, res, next) {
    const { body } = req;

    try {
      const user = await CreateUser(body, { userRepository, bcryptManager });
      return res.status(HttpStatus.CREATED).send(UserSerializer.serialize(user));
    } catch (error) {
      next(new HttpException(HttpStatus.CONFLICT, error.message));
    }
  }

  /**
   * Retrieve a user
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {Function} next Next function
   * @returns {Response|next} Response
   * @throws {NotFoundException} Not found
   */
  async getUser(req, res, next) {
    const { id } = req.params;
    try {
      const user = await GetUser(id, { userRepository });
      return res.send(UserSerializer.serialize(user));
    } catch (error) {
      next(new NotFoundException());
    }
  }

  /**
   * Retrieve all users
   * @param {Request} req Request
   * @param {Response} res Response
   * @returns {Response} Response
   */
  async getAllUsers(req, res) {
    const users = await ListUsers({ userRepository });

    return res.send(UserSerializer.serialize(users));
  }

  /**
   * Update a user
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {Function} next Next function
   * @returns {Response|next} Response
   * @throws {HttpException} Http exception
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
   * Delete a user
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {Function} next Next function
   * @returns {Response|next} Response
   * @throws {HttpException} Http exception
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
