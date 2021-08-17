// add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// divide two numbers
function divide(num1, num2) {
  if (num2 == 0) return "ERROR: Division by zero not supported at this time.";
  return num1 / num2;
}

// get two numbers, string operator, and select one of the four basic operations above
function operationSelection(num1, opStr, num2) {
  switch (opStr) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "ERROR: Operation Selection error.";
  }
}
// opsSelection test
console.log(operationSelection(4, "+", 4));
console.log(operationSelection(4, "-", 4));
console.log(operationSelection(4, "*", 4));
console.log(operationSelection(4, "/", 4));
console.log(operationSelection(1, "/", 4));
console.log(operationSelection(4, "/", 0));
console.log(operationSelection(4, "f", 0));
console.log(operationSelection(4, "f", 1));
