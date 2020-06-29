import Calculator from '../modules/calculator';

// const calc = require('../modules/calculator');

const calc = new Calculator(1, 2, 5, 9, 6);

test('capitalize first letter of string', () => {
  expect(calc.sum()).toBe(23);
});

// test('return an empty string if string is empty', () => {
//   expect(cap('')).toBe('');
// });

// test('return an empty string if no parameter is given', () => {
//   expect(cap()).toBe('');
// });

// test('return an empty string if the parameter is not a string', () => {
//   expect(cap(5)).toBe('');
// });
