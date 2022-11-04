import { sayHello } from '../hello';

describe('hello', () => {
  it('says hello', () => {
    expect(sayHello()).toEqual({ message: 'hello' });
  });
});
