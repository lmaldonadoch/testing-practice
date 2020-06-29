import Calculator from '../modules/calculator';

it('sum all values in the array', () => {
  expect(Calculator.sum(1, 2, 5, 9, 6)).toBe(23);
});

it('substracts the values provided from the first element', () => {
  expect(Calculator.substract(6, 3, 3)).toBe(0);
});

it('multiplies values starting from the first one', () => {
  expect(Calculator.multiply(6, 3, 2)).toBe(36);
});

it('divides the first element by following elements in order', () => {
  expect(Calculator.divide(18, 3, 2)).toBe(3);
});

it('returns an error message when elements are not numbers', () => {
  expect(Calculator.sum(18, 'something', 2)).toBe(
    'not all elements are integers'
  );
});
