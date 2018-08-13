import { add } from '../add';

describe('add function', () => {
  it('Should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('Should not add strings', () => {
    expect(add(1, '2')).toBe(null);
  });

  it('Should not add objects', () => {
    expect(add([], 2)).toBe(null);
  });

  it('Should add any munber of argumnets', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});
