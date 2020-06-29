const Calculator = (() => {
  const sum = (...args) => {
    if (
      args.filter((elem) => {
        return typeof elem != 'number';
      }).length > 0
    )
      return 'not all elements are integers';
    return args.reduce((sum, numb) => {
      return sum + numb;
    }, 0);
  };

  const substract = (...args) => {
    if (
      args.filter((elem) => {
        return typeof elem != 'number';
      }).length > 0
    )
      return 'not all elements are integers';
    var firstValue = args[0];
    return args.slice(1).reduce((substract, numb) => {
      return substract - numb;
    }, firstValue);
  };

  const multiply = (...args) => {
    if (
      args.filter((elem) => {
        return typeof elem != 'number';
      }).length > 0
    )
      return 'not all elements are integers';
    var firstValue = args[0];
    return args.slice(1).reduce((result, numb) => {
      return result * numb;
    }, firstValue);
  };

  const divide = (...args) => {
    if (
      args.filter((elem) => {
        return typeof elem != 'number';
      }).length > 0
    )
      return 'not all elements are integers';
    var firstValue = args[0];
    return args.slice(1).reduce((result, numb) => {
      return result / numb;
    }, firstValue);
  };

  return { sum, substract, multiply, divide };
})();

export default Calculator;
