it('should return first letter capitalized', () => {
  expect(capitalizeFirstLetter('abc')).toBe('Abc');
  expect(capitalizeFirstLetter()).toBeNull();
  expect(capitalizeFirstLetter(1)).toBeNull();
});
