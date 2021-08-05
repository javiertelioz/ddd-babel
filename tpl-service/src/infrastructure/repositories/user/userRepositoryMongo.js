import { User } from '../../../domain/entities/user';
import UserRepository from '../../../domain/repositories/user/userRepository';

import UserSchema from '../../orm/mongoose/schemas/user';

/**
 * Class representing a user repository mongo adapter.
 * @class
 * @extends UserRepository
 */
class UserRepositoryMongo extends UserRepository {
  /**
   * Create a UserRepositoryMongo.
   */
  constructor() {
    super();
  }

  /**
   * Create user
   * @async
   * @method
   * @param {User} userEntity User entity
   * @returns {Promise<User>} User entity
   */
  async persist(userEntity) {
    const { firstName, lastName, email, password } = userEntity;
    const mongooseUser = new UserSchema({ firstName, lastName, email, password });

    await mongooseUser.save();

    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  /**
   * Update user
   * @async
   * @method
   * @param {User} userEntity User entity
   * @returns {Promise<User|boolean>} User entity if it performs the operation successfully, otherwise it returns a boolean
   */
  async merge(userEntity) {
    const { id, firstName, lastName, email } = userEntity;
    const mongooseUser = await UserSchema.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName,
          lastName,
          email,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!mongooseUser) {
      return false;
    }

    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  /**
   * Delete a user
   * @async
   * @method
   * @param {string|number} id  Entity id
   * @returns {Promise<boolean>} if the user is deleted correctly it returns true otherwise false
   */
  async remove(id) {
    const mongooseUser = await UserSchema.findByIdAndDelete(id);

    if (!mongooseUser) {
      return false;
    }

    return true;
  }

  /**
   * Retrieves a user by id
   * @async
   * @method
   * @param {string|number} id Entity id
   * @returns {Promise<User|boolean>} if the user exists, this user returns otherwise a false
   */
  async get(id) {
    const mongooseUser = await UserSchema.findById(id);

    if (!mongooseUser) {
      return false;
    }

    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  /**
   * Retrieves a user by email
   * @async
   * @method
   * @param {string|number} email User email eg. joe
   * @returns {Promise<User|boolean>} if the user exists, this user returns otherwise a false
   */
  async getByEmail(email) {
    const mongooseUser = await UserSchema.findOne({ email });

    if (!mongooseUser) {
      return false;
    }

    return new User(
      mongooseUser.id,
      mongooseUser.firstName,
      mongooseUser.lastName,
      mongooseUser.email,
      mongooseUser.password
    );
  }

  /**
   * Retrieve all users
   * @async
   * @method
   * @param {array} filters filters
   * @param {pagination} pagination
   * @returns {Promise<User[]>} User entities
   */
  async find(filters = [], pagination) {
    const count = await UserSchema.countDocuments();

    const mongooseUsers = await UserSchema.find()
      //.skip(pagination.offset)
      //.limit(pagination.limit)
      .sort({ createdAt: 0 });

    const records = mongooseUsers.map(mongooseUser => {
      return new User(
        mongooseUser.id,
        mongooseUser.firstName,
        mongooseUser.lastName,
        mongooseUser.email,
        mongooseUser.password
      );
    });

    return { count, records };
  }
}

export default UserRepositoryMongo;
