import { CreateUser, UpdateUser, GetUser, ListUsers, DeleteUser } from '../../../application/use_cases/user';

import UserSerializer from '../../serializers/user/userSerializer';

import HttpException from '../exceptions/httpException';
import NotFoundException from '../exceptions/notFoundException';

import UserRepositoryMongo from '../../../infrastructure/repositories/user/userRepositoryMongo';

const userRepository = new UserRepositoryMongo();

class UserController {
  async createUser(req, res, next) {
    const { body } = req;

    try {
      const user = await CreateUser(body, { userRepository });
      return res.status(201).send(UserSerializer.serialize(user));
    } catch (error) {
      next(new HttpException(409, error.message));
    }
  }

  async getUser(req, res, next) {
    const { id } = req.params;
    try {
      const user = await GetUser(id, { userRepository });
      return res.send(UserSerializer.serialize(user));
    } catch (error) {
      next(new NotFoundException());
    }
  }

  async getAllUsers(req, res) {
    const users = await ListUsers({ userRepository });

    return res.send(UserSerializer.serialize(users));
  }

  async updateUser(req, res, next) {
    const { params, body } = req;

    try {
      await UpdateUser(params.id, body, { userRepository });

      return res.status(204).send();
    } catch (error) {
      next(new HttpException(500, error.message));
    }
  }
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
