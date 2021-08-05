import { User } from '../../../../src/domain/entities/user';

import { UpdateUser } from '../../../../src/application/use_cases/user';

import UserRepository from '../../../../src/domain/repositories/user/userRepository';

const userRepository = new UserRepository();

describe('Use Case: UpdateUser', () => {
  test('Should resolve with the updated user (augmented with an ID)', async () => {
    // given
    const updatedUser = new User(1, 'John', 'Doe', 'john.doe@email.com', 'abcd-1234', null, null, 'male');

    userRepository.get = jest.fn(() => Promise.resolve(updatedUser));
    userRepository.merge = jest.fn(() => Promise.resolve(updatedUser));

    // when
    const user = await UpdateUser(
      1,
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@email.com',
        gender: 'male',
      },
      {
        userRepository,
      }
    );

    // then
    expect(user).toEqual(updatedUser);
  });

  test('should resolve with the error "user does not exist"', async () => {
    // given
    userRepository.get = jest.fn(() => Promise.resolve(false));

    // when
    const ThrowEntityNotFound = async () => {
      await UpdateUser(
        1,
        {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john.doe@email.com',
          gender: 'male',
        },
        {
          userRepository,
        }
      );
    };

    // then
    expect(ThrowEntityNotFound).rejects.toThrowError('entity not found');
  });
});
