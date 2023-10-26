const add = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a + b;
};

const sub = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a - b;
};

const divide = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a / b;
};

const calculator = {
  add,
  sub,
  divide,
};

module.exports = calculator;
