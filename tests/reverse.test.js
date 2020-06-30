const reverse = require('../modules/reverse');

test('return the reverse of a string', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('return an empty string if string is empty', () => {
  expect(reverse('')).toBe('');
});

test('return an empty string if no parameter is given', () => {
  expect(reverse()).toBe('');
});

test('return an empty string if the parameter is not a string', () => {
  expect(reverse(5)).toBe('');
});
