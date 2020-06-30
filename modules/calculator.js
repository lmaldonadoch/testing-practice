const Calculator = (() => {
  const sum = (...args) => {
    if (
      args.filter((elem) => typeof elem !== 'number').length > 0
    ) return 'not all elements are integers';
    return args.reduce((sum, numb) => sum + numb, 0);
  };

  const substract = (...args) => {
    if (
      args.filter((elem) => typeof elem !== 'number').length > 0
    ) return 'not all elements are integers';
    const firstValue = args[0];
    return args.slice(1).reduce((substract, numb) => substract - numb, firstValue);
  };

  const multiply = (...args) => {
    if (
      args.filter((elem) => typeof elem !== 'number').length > 0
    ) return 'not all elements are integers';
    const firstValue = args[0];
    return args.slice(1).reduce((result, numb) => result * numb, firstValue);
  };

  const divide = (...args) => {
    if (
      args.filter((elem) => typeof elem !== 'number').length > 0
    ) return 'not all elements are integers';
    const firstValue = args[0];
    return args.slice(1).reduce((result, numb) => result / numb, firstValue);
  };

  return {
    sum, substract, multiply, divide,
  };
})();

export default Calculator;
