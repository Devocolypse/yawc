// Calculator display holders
let firstNum = '';
let secondNum = '';
let operator = '';

// Display methods
function updateNumHolder(num) {
  if (operator) {
    secondNum += num;
    updateDisplay(secondNum);
  } else {
    firstNum += num;
    updateDisplay(firstNum);
  }
}

function updateOperatorHolder(op) {
  if (operator) return;
  operator = op;
}

function updateDisplay(num) {
  const display = document.querySelector('.display');
  display.textContent = num;
}

function clearHolders() {
  firstNum = '';
  secondNum = '';
  operator = '';
}

function clearDisplay() {
  clearHolders();
  updateDisplay(0);
}

// Calculate result when equals button is pressed
function calculateAndDisplayResult() {
  const cleanFirstNum = parseInt(firstNum);
  const cleanSecondNum = parseInt(secondNum);
  const result = operate(cleanFirstNum, cleanSecondNum, operator);
  updateDisplay(result);

  // set holders to allow for another set of operations
  clearHolders();
  firstNum = `${result}`;
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

operatorBtns.forEach((op) =>
  op.addEventListener('click', () => {
    updateOperatorHolder(op.textContent)
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
      if (secondNum === 0) return 'https://0x.co/PP48C9'
      return divide(firstNum, secondNum);
  }
}
