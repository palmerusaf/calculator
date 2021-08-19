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
function mathOpsSelection(num1, opStr, num2) {
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
// mathOpsSelection tests
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

/** Callback function that gets text content and call appropriate display function, redirecting all display ops */
function displayController(e) {
  let displayInput = e.target.textContent;
  if (Number.isInteger(+displayInput)) {
    feedDisplayDigits(displayInput);
  } else {
    switch (displayInput) {
      case "CLEAR":
        clearDisplay();
        break;
      case ".":
        console.log("decimal");
        break;
      case "←":
        console.log("backspace");
        break;
      case "=":
        console.log("equals");
        break;
      default:
        feedDisplayMathOps(displayInput);
        break;
    }
  }
}
// displayController tests
/**
displayController("2");
displayController(".");
displayController("←");
displayController("=");
displayController("CLEAR");
displayController("*");
displayController("/");
displayController("+");
displayController("-");
//*/

/** get input from the calculator buttons on button click and feed them to the displayController*/
function getButtonInput() {
  const calButtons = document.querySelectorAll("#lowerCalContainer td");
  calButtons.forEach((button) => {
    button.addEventListener("click", displayController);
  });
}
getButtonInput();

/**  feed input from digit buttons into display */
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

/** clear the display of all data */
function clearDisplay() {
  const display = document.querySelector("#numDisplay");
  display.textContent = "";
}

/** When math function button is pressed add space, math function symbol, and space to display. */
function feedDisplayMathOps(mathOp){
  const display = document.querySelector("#numDisplay");
  disTxt = display.textContent;
  if(disTxt==""||(disTxt.substr(-1)!=" ")&&disTxt.includes(" "))
  return;
  if(disTxt.substr(-1)==" ")
  display.textContent = disTxt.slice(0,-3);
  display.textContent += ` ${mathOp} `;
}
/** when equal is pressed get data from display pass to ops selection */
