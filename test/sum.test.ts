import { sum } from '../src/sum';

describe('Sums test for setting up project', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
