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
  if (num2 === 0) return "ERROR: Division by zero not supported at this time.";
  return num1 / num2;
}

/** get two numbers, string operator, and select one of four basic math
 * operations */
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
console.log(mathOpsSelection(+"400.", "+", +"0."));
console.log(mathOpsSelection(4., "-", 4));
console.log(mathOpsSelection(4., "*", 4));
console.log(mathOpsSelection(4., "/", 4));
console.log(mathOpsSelection(1, "/", 4));
console.log(mathOpsSelection(4., "/", 0));
console.log(mathOpsSelection(4, "f", 0));
console.log(mathOpsSelection(4, "f", 1));
 //*/

/** Callback function that gets text content and call appropriate display
 * function, redirecting all display ops */
function displayController(e) {
  let displayInput = e.target.textContent;
  // clear error msgs
  if (readFromDisplay()[0].includes("ERROR")) clearDisplay();
  if (Number.isInteger(+displayInput)) {
    concatDigits(displayInput);
  } else {
    switch (displayInput) {
      case "CLEAR":
        clearDisplay();
        break;
      case ".":
        addDecimalsToDisplay();
        break;
      case "←":
        backspace();
        break;
      case "=":
        evalDisplayData();
        break;
      default:
        concatMathSymbol(displayInput);
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

/** get input from the calculator buttons on button click and feed them to the
 * displayController*/
function getButtonInput() {
  let calButtons = document.querySelectorAll("#lowerCalContainer td");
  calButtons.forEach((button) => {
    button.addEventListener("click", displayController);
  });
}
getButtonInput();

/** Get the display dom object */
function getDisplay() {
  return document.querySelector("#numDisplay");
}

/**  feed input from digit buttons into display */
function concatDigits(digit) {
  getDisplay().textContent += `${digit}`;
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
  getDisplay().textContent = "";
}

/** -When math function button is pressed add to display with spaces around
 *
 * -Don't add to display if display is empty
 *
 * -Replace symbol if already in display otherwise append it.
 */
function concatMathSymbol(mathOp) {
  let displayContent = getDisplay().textContent;
  if (displayContent === "") return;
  // replace symbol if its already in the display otherwise add to end
  displayContent.includes(" ")
    ? (getDisplay().textContent = displayContent.replace(
        displayContent.charAt(displayContent.indexOf(" ") + 1),
        mathOp
      ))
    : (getDisplay().textContent += ` ${mathOp} `);
}
/** when equal is pressed get data from display pass to ops selection and
 * return result to display overriding display*/
function evalDisplayData() {
  let displayContent = readFromDisplay();
  if (displayContent[2] === undefined || displayContent[2] === "") return;
  let displayData = displayContent;
  clearDisplay();
  computedResult = mathOpsSelection(
    +displayData[0],
    displayData[1],
    +displayData[2]
  );
  concatDigits(computedResult);
}

/** Read data from the display, removes formatting and returns as array */
function readFromDisplay() {
  let displayContent = getDisplay().textContent.split(" ");
  displayContent[0] = unformatNumber(displayContent[0]);
  if (displayContent.length === 3)
    displayContent[2] = unformatNumber(displayContent[2]);
  return displayContent;
}

/** Formats data and writes it to the display, takes an array
 * if the input is in scientific notation it skips formatting.
 * skips formatting empty strings to prevent conversion to zero.
 */
function writeToDisplay(displayContent) {
  if (displayContent[0].includes("e") || displayContent[0] === "") {
    getDisplay().textContent = displayContent;
    return;
  }
  displayContent[0] = formatNumber(displayContent[0]);
  if (displayContent[2] === "")
    getDisplay().textContent = displayContent.join(" ");
  else if (displayContent.length === 3) {
    displayContent[2] = formatNumber(displayContent[2]);
    getDisplay().textContent = displayContent.join(" ");
  } else getDisplay().textContent = `${displayContent[0]}`;
}
// writeToDisplay test
//*
let tests = [
  [""],
  ["1234"],
  ["1234", "-", "1234"],
  ["12341234", "+", "12341234"],
  ["12341234", "/", "12341234"],
  ["12341234", "/", ""],
  ["1e+23"],
  ["ERROR: Division by zero not supported at this time."]
];
for (let i = 0; i < tests.length; i++) {
  writeToDisplay(tests[i]);
  console.log(getDisplay().textContent);
  clearDisplay();
}
//*/

/** Remove last character from display */
function backspace() {
  let displayContent = getDisplay().textContent;
  if (displayContent === "") return;
  if (displayContent[displayContent.length - 1] === " ")
    getDisplay().textContent = displayContent.slice(0, -2);
  getDisplay().textContent = getDisplay().textContent.slice(0, -1);
}

/** Add decimal to number unless number has digit */
function addDecimalsToDisplay() {
  if (
    readFromDisplay()[readFromDisplay().length - 1] == "" ||
    readFromDisplay()[readFromDisplay().length - 1].includes(".")
  )
    return;
  getDisplay().textContent += ".";
}

/** Format number by adding commas */
function formatNumber(num) {
  return Intl.NumberFormat("en-US").format(num);
}
// formatNumber tests
/*
console.log(formatNumber(100000000));
console.log(formatNumber(10000000.0000000));
console.log(formatNumber(123));
console.log(formatNumber("123"));
//*/

/** Unformat number to use it in calculations */
function unformatNumber(num) {
  return num.replace(/,/g, "");
}
// unformatNumber tests
/*
console.log(unformatNumber("1,000,000"));
console.log(unformatNumber("0"));
//*/
