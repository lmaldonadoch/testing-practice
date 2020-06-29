import Cypher from '../modules/cypher';

it('Encrypt message all lower case', () => {
  expect(Cypher.encrypt(2, 'abc')).toBe('cde');
});

it('Encrypt message all upper case', () => {
  expect(Cypher.encrypt(2, 'ABC')).toBe('cde');
});
