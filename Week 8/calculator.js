class Calculator {
  expression() {
    let exp = prompt("Enter mathematical expression?");
    return exp;
  }
  expCalc(exp) {
    
    console.log(`Expression's evaluation is ${eval(exp)}`);
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
