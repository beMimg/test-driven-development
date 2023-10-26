const capitalizeFirstLetter = require('./capitalize.js');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caeserCipher = require('./caeserCipher');
const analyzeArray = require('./analyzeArray');

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

describe('Calculator Divide', () => {
  it('should return the division of two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  it('should handle NaN', () => {
    expect(calculator.divide('a', 1)).toBeNull();
    expect(calculator.divide('a', 'a')).toBeNull();
    expect(calculator.divide(1, 'a')).toBeNull();
  });
});

describe('Calculator Multiply', () => {
  it('should return the multiplication of two numbers', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
  it('should handle NaN', () => {
    expect(calculator.multiply('a', 1)).toBeNull();
    expect(calculator.multiply('a', 'a')).toBeNull();
    expect(calculator.multiply(1, 'a')).toBeNull();
  });
});

describe('Caeser Cipher', () => {
  it('should return shifted string with 1 shift factor', () => {
    expect(caeserCipher('z', 1)).toMatch('a');
  });
  it('should return shifted string with 2 shift factor', () => {
    expect(caeserCipher('z', 2)).toMatch('b');
  });
  it('should return shifted string with 3 shift factor', () => {
    expect(caeserCipher('z', 3)).toMatch('c');
  });
  it('should return null if shift factor is negative', () => {
    expect(caeserCipher('z', -1)).toBeNull();
  });
  it('should return the same string if shift factor in undefined', () => {
    expect(caeserCipher('z')).toMatch('z');
  });
});

describe('Analyze Array', () => {
  it('should return properties if an array of numbers is given', () => {
    const numbers = [1, 8, 3, 4, 2, 6];
    const result = analyzeArray(numbers);
    expect(result).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it('should handle empty array', () => {
    const numbers = [];
    const result = analyzeArray(numbers);
    expect(result).toBeNull();
  });

  it('should handle an array with NaN', () => {
    const numbers = ['test'];
    const result = analyzeArray(numbers);
    expect(result).toBeNull();
  });

  it('should handle a non-array', () => {
    const numbers = 'test';
    const result = analyzeArray(numbers);
    expect(result).toBeNull();
  });
});
