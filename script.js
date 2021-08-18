/*** add two numbers*/
function add(num1, num2) {
  return num1 + num2;
}

/** subtract two numbers */
function subtract(num1, num2) {
  return num1 - num2;
}

/** multiply two numbers */
function multiply(num1, num2) {
  return num1 * num2;
}

/** divide two numbers */
function divide(num1, num2) {
  if (num2 == 0) return "ERROR: Division by zero not supported at this time.";
  return num1 / num2;
}

/** get two numbers, string operator, and select one of four basic math operations */
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
// opsSelection tests
/** 
console.log(operationSelection(4, "+", 4));
console.log(operationSelection(4, "-", 4));
console.log(operationSelection(4, "*", 4));
console.log(operationSelection(4, "/", 4));
console.log(operationSelection(1, "/", 4));
console.log(operationSelection(4, "/", 0));
console.log(operationSelection(4, "f", 0));
console.log(operationSelection(4, "f", 1));
 */

/** Callback function that gets text content */
function getTextContent(e){
  feedDisplayDigits(e.target.innerText);
}

/** get the number from digit buttons on button click and feed them to the display*/
function getDigitButtonInput() {
  const digitButtons = document.querySelectorAll(".digitBtn");
  digitButtons.forEach((button) => {
    button.addEventListener("click", getTextContent)
  });
}
getDigitButtonInput();

/** feed input from digit buttons into display */
function feedDisplayDigits(digit) {
  const display = document.querySelector("#numDisplay");
  display.textContent += `${digit}`;
}
// feedDisplayDigits tests
/* 
feedDisplayDigits(0);
feedDisplayDigits(1);
feedDisplayDigits(2);
feedDisplayDigits(3);
feedDisplayDigits(4);
feedDisplayDigits(5);
feedDisplayDigits(6);
feedDisplayDigits(7);
feedDisplayDigits(8);
feedDisplayDigits(9);
feedDisplayDigits(42);
// */

/** When math function button is pressed add space, math function symbol, and space to display. */

/** when equal is pressed get data from display pass to ops selection */
