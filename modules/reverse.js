function reverse(string = '') {
  if (typeof string !== 'string') return '';
  return string.split('').reverse().join('');
}

module.exports = reverse;
