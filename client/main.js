'use strict';

$(document).ready(function() {
  var screenValue = $('#screen');
  var calculation = [];

  function clear() {
    screenValue.text('0');
    screenValue.css('font-size', '5em');
    calculation = [];
  }

  function changeNegativePositive() {
    if (screenValue.text().length > 0 && screenValue.text() !== '0') {
      if (screenValue.text()[0] === '-') {
        screenValue.text(screenValue.text().slice(1));
      } else {
        screenValue.prepend('-');
      }
    }
  }

  function addDecimal() {
    if (screenValue.text().indexOf('.') === -1) {
      if (screenValue.text() === '0') {
        screenValue.text(screenValue.text() + '.');
      } else {
        screenValue.text(screenValue.text() + '.');
      }
    }
  }

  function checkDecimals(number) {
    if (number % 1 === 0) {
      return Math.floor(number);
    } else {
      return number.toFixed(4);
    }
  }

  function addNumber(number) {
    console.log('Number: ' + number);
    if (screenValue.text() === '0') {
      screenValue.text(number);
    } else {
      screenValue.text(screenValue.text() + number);
    }
  }

  function addOperand(operand) {
    console.log('Operand: ' + operand);
    if (!calculation[1]) {
      console.log('Array: ' + calculation);
      calculation.push(screenValue.text());
      console.log('Array2: ' + calculation);
      calculation.push(operand);
      console.log('Array3: ' + calculation);
      screenValue.text('0');
    } else {
      console.log('Array: ' + calculation);
      calculation[1] = operand;
      console.log('Array2: ' + calculation);
      screenValue.text('0');
    }
  }

  function squareRoot() {
    var result = Math.sqrt(parseFloat(screenValue.text()));
    screenValue.text(checkDecimals(result));
  }

  function giveTotal() {
    var result = 0;
    if (calculation[1] === '×') {
      result = parseFloat(calculation[0]) * parseFloat(screenValue.text());
    } else if (calculation[1] === '+') {
      result = parseFloat(calculation[0]) + parseFloat(screenValue.text());
    } else if (calculation[1] === '÷') {
      result = parseFloat(calculation[0]) / parseFloat(screenValue.text());
    } else if (calculation[1] === '−') {
      result = parseFloat(calculation[0]) - parseFloat(screenValue.text());
    } else if (calculation[1] === 'xy') {
      result = Math.pow(parseFloat(calculation[0]),
                        parseFloat(screenValue.text()));
    }
    screenValue.text(checkDecimals(result));
    console.log('Before: ' + calculation);
    calculation = [];
    console.log('After: ' + calculation);
  }

  $('#dot').click(function() {
    addDecimal();
  });

  $('.number').click(function() {
    addNumber($(this).text());
  });

  $('.operand').click(function() {
    addOperand($(this).text());
  });

  $('#root').click(function() {
    squareRoot();
  });

  $('#equal').click(function() {
    giveTotal();
  });

  $('#clear').click(function() {
    clear();
  });

  $('#switch').click(function() {
    changeNegativePositive();
  });

  $('#info').click(function() {
    $('[data-toggle="popover"]').popover();
  });

  $(document).keyup(function(e) {
    if (!e.shiftKey && e.keyCode > 47 && e.keyCode < 58) { // ENTER NUMBERS
      addNumber(String.fromCharCode(e.keyCode));
    }
    if (e.keyCode === 8) { // DELETE LAST NUMBERS
      if (screenValue.text().length > 1) { // IF SCREEN IS DISPLAYING MORE THAN 1 CHARACTER DELETE THE LAST
        var txt = screenValue.text();
        screenValue.text(txt.slice(0, -1));
      } else {
        screenValue.text('0'); // ELSE CHANGE TO ZERO
      }
    }
    if (e.keyCode === 13) { // PRESS ENTER
      giveTotal();
    }
    if (e.keyCode === 27) { // PRESS ESC
      clear();
    }
    if (e.keyCode === 190) { // ADD DECIMAL PERIOD
      addDecimal();
    }
    if (e.shiftKey && e.keyCode === 187) { // SUM
      addOperand('+');
    }
    if (e.shiftKey && e.keyCode === 189) { // SUBSTRACT
      addOperand('−');
    }
    if (e.shiftKey && e.keyCode === 56) { // MULTIPLY
      addOperand('×');
    }
    if (e.keyCode === 191) { // DIVIDE
      addOperand('÷');
    }
    if (e.shiftKey && e.keyCode === 54) { // EXPONENTS
      addOperand('xy');
    }
    if (e.keyCode === 83) { // SQUARE ROOT
      squareRoot();
    }
    if (e.shiftKey && e.keyCode === 192) {
      changeNegativePositive();
    }
  });

});
