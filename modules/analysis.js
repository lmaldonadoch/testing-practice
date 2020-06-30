function Analysis(...array) {
  const avg = array.reduce((a, b) => (a + b)) / array.length;
  return {
    average: avg,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = Analysis;
