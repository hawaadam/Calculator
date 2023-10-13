var display = document.forms["calculator"]["display"];
var operators = ["+", "-", "*", "/", "%"];
var lastInputIsOperator = false;

function updateDisplay(value) {
  if (operators.includes(value)) {
    if (lastInputIsOperator) {
      // If the last input was also an operator, don't add a new operator
      return;
    } else if (display.value === "" && value !== "-") {
      // If the display is empty and the new input is not a minus sign, don't add an operator
      return;
    }
    lastInputIsOperator = true;
  } else {
    lastInputIsOperator = false;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
  lastInputIsOperator = false;
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
  lastInputIsOperator = operators.includes(display.value.slice(-1));
}

function calculateResult() {
  display.value = eval(display.value);
}
