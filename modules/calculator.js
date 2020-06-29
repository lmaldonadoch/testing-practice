const Calculator = (() =>  {
  const sum = (...args) => {
    return args.reduce((sum, numb) => {
      return sum + numb;
    }, 0);
  };

  const substract = (...args) => {
    var firstValue = args[0];
    return args.slice(1).reduce((substract, numb) => {
      return substract - numb;
    }, firstValue);
  };


  return { sum, substract };
})();

export default Calculator;
