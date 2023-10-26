function reverseString(word) {
  if (typeof word === 'number') return null;

  let reversedString = '';
  for (let i = word.length - 1; i > -1; i--) {
    reversedString += word[i];
  }
  return reversedString;
}

module.exports = reverseString;
