import SayHello from '../../../../src/application/use_cases/welcome/sayHello';

describe('Use Case: Say Hello', () => {
  test('Should resolve with "Hello world!" when name is not defined (undefined or null)', () => {
    // when
    const result = SayHello();

    // then
    expect(result).toBe('Hello world!');
  });

  test('Should resolve with "Hello Joe Doe!" when name is provided', () => {
    // given
    const name = 'Joe Doe';

    // when
    const result = SayHello(name);

    // then
    expect(result).toBe('Hello Joe Doe!');
  });
});
