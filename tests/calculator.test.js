import Calculator from '../modules/calculator';

it('sum all values in the array', () => {
  expect(Calculator.sum(1, 2, 5, 9, 6)).toBe(23);
});

it('substracts the values provided from the first element', () => {
  expect(Calculator.substract(6, 3, 3)).toBe(0);
});
