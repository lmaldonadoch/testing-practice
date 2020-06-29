export default class Calculator {
  constructor(...args) {
    this.numbersArray = args;
  }

  sum() {
    return this.numbersArray.reduce((sum, numb) => {
      sum + numb;
    }, 0);
  }
}
