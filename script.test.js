const capitalizeFirstLetter = require('./capitalize.js');
const reverseString = require('./reverseString');
const calculator = require('./calculator');

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
  it('should return the sum of two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  it('should handle NaN', () => {
    expect(calculator.add('a', 1)).toBeNull();
    expect(calculator.add('a', 'a')).toBeNull();
    expect(calculator.add(1, 'a')).toBeNull();
  });
});

describe('Calculator Sub', () => {
  it('should return the subtraction of two numbers', () => {
    expect(calculator.sub(3, 2)).toBe(1);
  });
  it('should handle NaN', () => {
    expect(calculator.sub('a', 1)).toBeNull();
    expect(calculator.sub('a', 'a')).toBeNull();
    expect(calculator.sub(1, 'a')).toBeNull();
  });
});
