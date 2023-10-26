function capitalizeFirstLetter(word) {
  if (typeof word === 'number') {
    return null;
  }
  const firstLetter = word[0].toUpperCase();
  const afterFirstLetter = word.slice(1, word.length);
  return firstLetter + afterFirstLetter;
}

module.exports = capitalizeFirstLetter;
