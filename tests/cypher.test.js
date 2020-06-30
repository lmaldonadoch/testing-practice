import Cypher from '../modules/cypher';

it('Encrypt message all lower case', () => {
  expect(Cypher.encrypt(2, 'abc')).toBe('cde');
});

it('Encrypt message all upper case', () => {
  expect(Cypher.encrypt(2, 'ABC')).toBe('CDE');
});

it('Encrypt message with numbers', () => {
  expect(Cypher.encrypt(2, 'a5c8b9')).toBe('c5e8d9');
});

it('Encrypt message that has to start on a after z', () => {
  expect(Cypher.encrypt(2, 'yza')).toBe('abc');
});
