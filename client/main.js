'use strict';

$(document).ready(function() {
  var screenValue = $('#screen');
  var calculation = [];

  $('#clear').click(function() {
    screenValue.text('0');
    screenValue.css('font-size', '5em');
    calculation = [];
  });

  $('#switch').click(function() {
    if (screenValue.text().length > 0 && screenValue.text() !== '0') {
      if (screenValue.text()[0] === '-') {
        screenValue.text(screenValue.text().slice(1));
      } else {
        screenValue.prepend('-');
      }
    }
  });

  $('#plus').click(function() {
    if (!calculation[1]) {
      calculation.push(screenValue.text());
      calculation.push('+');
      screenValue.text('0');
    } else {
      calculation[1] = '+';
      screenValue.text('0');
    }
  });

  $('#minus').click(function() {
    if (!calculation[1]) {
      calculation.push(screenValue.text());
      calculation.push('-');
      screenValue.text('0');
    } else {
      calculation[1] = '-';
      screenValue.text('0');
    }
  });

  $('#divide').click(function() {
    if (!calculation[1]) {
      calculation.push(screenValue.text());
      calculation.push('/');
      screenValue.text('0');
    } else {
      calculation[1] = '/';
      screenValue.text('0');
    }
  });

  $('#times').click(function() {
    if (!calculation[1]) {
      calculation.push(screenValue.text());
      calculation.push('*');
      screenValue.text('0');
    } else {
      calculation[1] = '*';
      screenValue.text('0');
    }
  });

  $('#exponent').click(function() {
    if (!calculation[1]) {
      calculation.push(screenValue.text());
      calculation.push('exp');
      screenValue.text('0');
    } else {
      calculation[1] = 'exp';
      screenValue.text('0');
    }
  });

  $('#root').click(function() {
    var result = Math.sqrt(parseFloat(screenValue.text()));
    if (result % 1 === 0) {
      result = Math.floor(result);
    } else {
      result = result.toFixed(4);
    }
    screenValue.text(result);
  });

  $('#equal').click(function() {
    var result = 0;
    if (calculation[1] === '*') {
      result = parseFloat(calculation[0]) * parseFloat(screenValue.text());
    } else if (calculation[1] === '+') {
      result = parseFloat(calculation[0]) + parseFloat(screenValue.text());
    } else if (calculation[1] === '/') {
      result = parseFloat(calculation[0]) / parseFloat(screenValue.text());
    } else if (calculation[1] === '-') {
      result = parseFloat(calculation[0]) - parseFloat(screenValue.text());
    } else if (calculation[1] === 'exp') {
      result = Math.pow(parseFloat(calculation[0]),
                        parseFloat(screenValue.text()));
    }
    screenValue.text(result);
    calculation = [];
  });

  $('#dot').click(function() {
    if (screenValue.text().indexOf('.') === -1) {
      if (screenValue.text() === '0') {
        screenValue.text(screenValue.text() + '.');
      } else {
        screenValue.text(screenValue.text() + '.');
      }
    }
  });

  $('#zero').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('0');
    } else {
      screenValue.text(screenValue.text() + '0');
    }
  });

  $('#one').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('1');
    } else {
      screenValue.text(screenValue.text() + '1');
    }
  });

  $('#two').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('2');
    } else {
      screenValue.text(screenValue.text() + '2');
    }
  });

  $('#three').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('3');
    } else {
      screenValue.text(screenValue.text() + '3');
    }
  });

  $('#four').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('4');
    } else {
      screenValue.text(screenValue.text() + '4');
    }
  });

  $('#five').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('5');
    } else {
      screenValue.text(screenValue.text() + '5');
    }
  });

  $('#six').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('6');
    } else {
      screenValue.text(screenValue.text() + '6');
    }
  });

  $('#seven').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('7');
    } else {
      screenValue.text(screenValue.text() + '7');
    }
  });

  $('#eight').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('8');
    } else {
      screenValue.text(screenValue.text() + '8');
    }
  });

  $('#nine').click(function() {
    if (screenValue.text() === '0') {
      screenValue.text('9');
    } else {
      screenValue.text(screenValue.text() + '9');
    }
  });

});
