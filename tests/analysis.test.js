const Analysis = require('../modules/analysis');

it('should give an object with the array properties', () => {
  const object = {
    average: 2.5,
    min: 1,
    max: 3,
    length: 4,
  };

  expect(Analysis(1, 3, 3, 3)).toStrictEqual(object);
});
