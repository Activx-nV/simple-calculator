const numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operator'),
  clearBtns = document.querySelectorAll('.clear-btn'),
  decimalBtn = document.getElementById('decimal'),
  result = document.getElementById('result'),
  sqrt = document.querySelector('.sqrt');
display = document.getElementById('display'),
pow = document.querySelector('.pow');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

for (let i = 0; i < clearBtns.length; i++) {
  clearBtns[i].addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
}

sqrt.addEventListener('click', operationRoot);

decimalBtn.addEventListener('click', decimal);

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0' && display.value !== '-') {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operationPress(operator) {
  let localOperationMemory = display.value;

  if (display.value === '0' && operator === '-' || display.value[0] === '-' && operator === '-') {
    display.value = '-';

  } else if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += +localOperationMemory;
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= +localOperationMemory;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= +localOperationMemory;
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= +localOperationMemory;
    } else if (MemoryPendingOperation === 'pow') {
      MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, +localOperationMemory);
    } else{
      MemoryCurrentNumber = +localOperationMemory;
    }
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = operator;

    if (display.value === '0.30000000000000004') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.7999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.1999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.2999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.4999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.5999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.6999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.8999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    } else if (display.value === '0.9999999999999999') {
      display.value = parseFloat(MemoryCurrentNumber).toFixed(1);
    }


  }
}
function operationRoot() {
  let numberMemory = display.value;
  display.value = 0;
  if (numberMemory < 0) {
    display.value = 'Invalid.Only pos. nums.'
  } else display.value = Math.sqrt(numberMemory);

}

function decimal(argument) {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}