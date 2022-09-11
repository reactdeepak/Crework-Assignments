class Calculator {
  expression() {
    let exp = prompt("Enter mathematical expression?");
    return exp;
  }
  expCalc(exp) {
    console.log(eval(exp));
  }
  validator(exp){
    if(^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$.test(exp))
  }
}
const calc = new Calculator();
calc.expCalc(calc.expression());
