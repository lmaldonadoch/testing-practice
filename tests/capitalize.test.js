const cap = require('../modules/capitalize');

test('capitalize first letter of string', () => {
  expect(cap('hello')).toBe('Hello');
});

test('return an empty string if string is empty', () => {
  expect(cap('')).toBe('');
});

test('return an empty string if no parameter is given', () => {
  expect(cap()).toBe('');
});

test('return an empty string if the parameter is not a string', () => {
  expect(cap(5)).toBe('');
});
