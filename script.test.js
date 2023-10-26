const capitalizeFirstLetter = require('./capitalize.js');
const reverseString = require('./reverseString');

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
