// Calculator display holders
let firstNum = '';
let secondNum = '';
let operator = '';
let prevResult = '';

// Rounding method courtesy of https://stackoverflow.com/a/48764436
function round(num, decimalPlaces = 0) {
  let p = Math.pow(10, decimalPlaces);
  let n = num * p * (1 + Number.EPSILON);
  return Math.round(n) / p;
}

// Display methods
function updateNumHolder(num) {
  if (operator && firstNum) {
    secondNum += num;
    updateDisplay(secondNum);
  } else if (prevResult === firstNum) {
    firstNum = num;
    updateDisplay(firstNum);
  } else {
    firstNum += num;
    updateDisplay(firstNum);
  }
}

function clearActiveOp() {
  operatorBtns.forEach((btn) => btn.classList.remove('opActive'));
}

function setActiveOp(btn) {
  if (!firstNum) return;
  clearActiveOp();
  btn.classList.add('opActive');
}

function updateOperatorHolder(op) {
  if (!firstNum) return;
  operator = op;
}

function updateDisplay(msg) {
  const display = document.querySelector('.display');
  display.textContent = msg;
}

function clearHolders() {
  firstNum = '';
  secondNum = '';
  operator = '';
}

function clearDisplay() {
  clearHolders();
  clearActiveOp();
  updateDisplay(0);
}

// Calculate result when equals button is pressed
function calculateAndDisplayResult() {
  if (!(firstNum && secondNum && operator)) return;

  const cleanFirstNum = parseInt(firstNum);
  const cleanSecondNum = parseInt(secondNum);
  const result = round(operate(cleanFirstNum, cleanSecondNum, operator), 2);
  prevResult = `${result}`;
  updateDisplay(result);
  clearActiveOp();

  // set holders to allow for another set of operations
  if (typeof result === 'number') {
    clearHolders();
    firstNum = prevResult;
  } else {
    clearDisplay();
  }
}

// Triggers for calculator buttons
const numBtns = document.querySelectorAll('.numBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const clearBtn = document.querySelector('.clearBtn');
const equalsBtn = document.querySelector('.equalsBtn');

clearBtn.addEventListener('click', () => clearDisplay());
equalsBtn.addEventListener('click', () => calculateAndDisplayResult());

numBtns.forEach((button) =>
  button.addEventListener('click', () => {
    updateNumHolder(button.textContent);
  })
);

operatorBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    updateOperatorHolder(btn.textContent);
    setActiveOp(btn);
  })
);

// Basic math operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Determine correct operation to call
function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case '+':
      return add(firstNum, secondNum);
    case '-':
      return subtract(firstNum, secondNum);
    case '×':
      return multiply(firstNum, secondNum);
    case '÷':
      if (secondNum === 0) {
        alert('https://youtu.be/5scTi8xIdeQ');
        return '';
      }
      return divide(firstNum, secondNum);
  }
}
