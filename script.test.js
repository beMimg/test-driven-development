const capitalizeFirstLetter = require('./capitalize.js');
const reverseString = require('./reverseString');
const { calculator } = require('./calculator');
describe('Capitalize', () => {
  it('should return first letter capitalized', () => {
    expect(capitalizeFirstLetter('abc')).toBe('Abc');
  });
  it('should handle numbers', () => {
    expect(capitalizeFirstLetter(1)).toBeNull();
  });
});

describe('Reverse String', () => {
  it('should return reverse string', () => {
    expect(reverseString('string')).toBe('gnirts');
  });
  it('should handle numbers', () => {
    expect(reverseString(1)).toBeNull();
  });
});

describe('Calculator Add', () => {
  it('should should return the sum of two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  it('should handle not numbers', () => {
    expect(calculator.add(NaN, 1)).toBeNull();
    expect(calculator.add(NaN, NaN)).toBeNull();
    expect(calculator.add(1, NaN)).toBeNull();
  });
});
