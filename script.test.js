const capitalizeFirstLetter = require('./capitalize.js');

describe('Capitalize', () => {
  it('should return first letter capitalized', () => {
    expect(capitalizeFirstLetter('abc')).toBe('Abc');
  });
  it('should handle numbers', () => {
    expect(capitalizeFirstLetter(1)).toBeNull();
  });
});
