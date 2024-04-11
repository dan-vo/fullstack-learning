let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let inputHistoryButton = document.querySelector('.input-history-button');
let inputHistoty = document.querySelector('.input-history');
let inputHistoryList = document.querySelector('.input-history-list');
let onInputHistoryItemClick = function (event) {
  let target = event.target;
  let content = target.textContent;
  let parts = content.split('=');
  let equation = parts[0];
  let result = parts[1];

  inputEquation.textContent = equation;
  input.value = result;
  inputHistoty.classList.remove('open');
};
let calculateResult = function () {
  let inputValue = input.value;
  let result = '';

  try {
    result = eval(inputValue);
  } catch (e) {
    result = 'ERROR';
  }

  if (result === 'ERROR') {
    inputEquation.innerHTML = '';
  } else {
    inputEquation.innerHTML = inputValue;

    let div = document.createElement('div');
    let equation = inputValue;

    div.textContent = `${equation}=${result}`;
    div.addEventListener('click', onInputHistoryItemClick);

    inputHistoryList.appendChild(div);
  }

  input.value = result;
};
let clearInput = function () {
  input.value = '';
  inputEquation.textContent = '';
};
let deleteLastInput = function () {
  input.value = input.value.slice(0, -1);
};

let disableOperator = function (disabled) {
  for (let i = 0; i < operatorButtons.length; i++) {
    let operatorButton = operatorButtons[i];
    operatorButton.disabled = disabled;
  }
};
let processCaculatorAction = function (action) {
  if (action === '=') {
    calculateResult();
  } else if (action === 'AC') {
    clearInput();
  } else if (action === 'DEL') {
    deleteLastInput();
  } else {
    let inputValue = input.value;
    let newValue = inputValue + action;

    input.value = newValue;
  }

  let isLastCharacterAnOperator = function (value) {
    let lastCharater = value.substr(-1);
    let operators = ['+', '-', '*', '/', '.'];

    let result = operators.includes(lastCharater);
    return result;
  };

  let isValidInput = isLastCharacterAnOperator(input.value);

  if (isValidInput) {
    // make button enabled
    disableOperator(true);
  } else {
    disableOperator(false);
  }
};

let onCalculatorButtonClick = function (event) {
  let action = event.currentTarget.textContent;
  processCaculatorAction(action);
};

for (let i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];

  currentButton.addEventListener('click', onCalculatorButtonClick);
}

let onDocumentKeyUp = function (event) {
  let key = event.key;

  let action;

  if (key === 'Enter') {
    action = '=';
  } else if (key === 'Backspace') {
    action = 'DEL';
  } else if (key === 'Escape') {
    action = 'AC';
  } else {
    action = key;
  }
  let acceptedActions = [];

  for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    let buttonText = currentButton.textContent;
    acceptedActions.push(buttonText);
  }

  if (acceptedActions.includes(action)) {
    processCaculatorAction(action);
  }
};

document.addEventListener('keyup', onDocumentKeyUp);

let onInputHistoryButton = function (event) {
  if (inputHistoty.classList.contains('open')) {
    inputHistoty.classList.remove('open');
  } else {
    inputHistoty.classList.add('open');
  }
};

inputHistoryButton.addEventListener('click', onInputHistoryButton);
