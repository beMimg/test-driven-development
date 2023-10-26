const add = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a + b;
};
console.log(add(2, 2));

const calculator = {
  add,
};

module.exports = calculator;
