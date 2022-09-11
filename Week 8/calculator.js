class Calculator {
  expression() {
    let exp = prompt("Enter mathematical expression?");
    return exp;
  }
  expCalc(exp) {
    var result = eval(exp);
    if (
      result == Number.POSITIVE_INFINITY ||
      result == Number.NEGATIVE_INFINITY
    ) {
      console.log("Number cant be divisible by zero");
    } else {
      console.log(`Expression's evaluation is ${result}`);
    }
  }
  validator(exp) {
    if (/^(\d+[\+\-\*\/]{1})+\d+$/.test(exp)) {
      this.expCalc(exp);
    } else {
      console.log("Enter a valid expression");
    }
  }
}
const calc = new Calculator();
calc.validator(calc.expression());
