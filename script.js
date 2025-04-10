// Triggers for calculator buttons
const numBtns = document.querySelectorAll('.numBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const clearBtn = document.querySelector('.clearBtn');
const equalsBtn = document.querySelector('.equalsBtn');

clearBtn.addEventListener('click', () => console.log(clearBtn));
equalsBtn.addEventListener('click', () => console.log(equalsBtn));

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', () => {
    console.log(numBtns[i]);
  });
}

for (let i = 0; i < operatorBtns.length; i++) {
  operatorBtns[i].addEventListener('click', () => {
    console.log(operatorBtns[i]);
  });
}

// Calculator display holders
let firstNum = '';
let secondNum = '';
let operator = '';

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
    case '*':
      return multiply(firstNum, secondNum);
    case '/':
      return divide(firstNum, secondNum);
  }
}
